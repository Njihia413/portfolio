interface WOWOptions {
  boxClass?: string;
  animateClass?: string;
  offset?: number;
  mobile?: boolean;
  live?: boolean;
  callback?: ((box: HTMLElement) => void) | null;
  scrollContainer?: string | null;
}

interface WOWConfig {
  boxClass: string;
  animateClass: string;
  offset: number;
  mobile: boolean;
  live: boolean;
  callback: ((box: HTMLElement) => void) | null;
  scrollContainer: HTMLElement | null;
}

function isIn(needle: unknown, haystack: unknown[]): boolean {
  return haystack.indexOf(needle) >= 0;
}

function isMobile(agent: string): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    agent
  );
}

function createEvent(event: string, bubble = false, cancel = false, detail: unknown = null): CustomEvent {
  let customEvent: CustomEvent;
  if (document.createEvent != null) {
    // W3C DOM
    customEvent = document.createEvent("CustomEvent") as CustomEvent;
    customEvent.initCustomEvent(event, bubble, cancel, detail);
  } else {
    customEvent = new CustomEvent(event, { bubbles: bubble, cancelable: cancel, detail });
  }

  return customEvent;
}

function emitEvent(elem: HTMLElement, event: Event): void {
  if (elem.dispatchEvent != null) {
    // W3C DOM
    elem.dispatchEvent(event);
  }
}

function addEvent(elem: EventTarget, event: string, fn: EventListener): void {
  if (elem.addEventListener != null) {
    // W3C DOM
    elem.addEventListener(event, fn, false);
  }
}

function removeEvent(elem: EventTarget, event: string, fn: EventListener): void {
  if (elem.removeEventListener != null) {
    // W3C DOM
    elem.removeEventListener(event, fn, false);
  }
}

function getInnerHeight(): number {
  if ("innerHeight" in window) {
    return window.innerHeight;
  }

  return document.documentElement.clientHeight;
}

// getComputedStyle shim - lazy evaluation to avoid SSR issues
function getComputedStyleFn(el: HTMLElement): { getPropertyValue: (prop: string) => string | null } {
  if (typeof window !== "undefined" && window.getComputedStyle) {
    return window.getComputedStyle(el);
  }
  // Fallback for old IE
  const getComputedStyleRX = /(-([a-z]){1})/g;
  return {
    getPropertyValue(prop: string): string | null {
      if (prop === "float") {
        prop = "styleFloat";
      }
      if (getComputedStyleRX.test(prop)) {
        prop.replace(getComputedStyleRX, (_, _char: string) => _char.toUpperCase());
      }
      const currentStyle = (el as unknown as { currentStyle?: Record<string, string> }).currentStyle;
      return (currentStyle != null ? currentStyle[prop] : void 0) || null;
    },
  };
}

export default class WOW {
  defaults: WOWConfig = {
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
    callback: null,
    scrollContainer: null,
  };

  config: WOWConfig;
  element!: HTMLElement;
  boxes: HTMLElement[] = [];
  all: HTMLElement[] = [];
  stopped = false;
  scrolled = true;
  interval?: ReturnType<typeof setInterval>;
  finished: HTMLElement[] = [];
  animationNameCache: WeakMap<HTMLElement, string>;
  wowEvent: CustomEvent;

  constructor(options: WOWOptions = {}) {
    this.start = this.start.bind(this);
    this.resetAnimation = this.resetAnimation.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.scrollCallback = this.scrollCallback.bind(this);
    this.scrolled = true;
    this.config = { ...this.defaults, ...options } as WOWConfig;
    if (options.scrollContainer != null) {
      this.config.scrollContainer = document.querySelector(
        options.scrollContainer
      );
    }
    // Map of elements to animation names:
    this.animationNameCache = new WeakMap();
    this.wowEvent = createEvent(this.config.boxClass);
  }

  init(): void {
    this.element = window.document.documentElement as HTMLElement;
    if (isIn(document.readyState, ["interactive", "complete"])) {
      this.start();
    } else {
      addEvent(document, "DOMContentLoaded", this.start);
    }
    this.finished = [];
  }

  start(): void {
    this.stopped = false;
    this.boxes = [].slice.call(
      this.element.querySelectorAll(`.${this.config.boxClass}`)
    );
    this.all = this.boxes.slice(0);
    if (this.boxes.length) {
      if (this.disabled()) {
        this.resetStyle();
      } else {
        for (let i = 0; i < this.boxes.length; i++) {
          const box = this.boxes[i];
          this.applyStyle(box, true);
        }
      }
    }
    if (!this.disabled()) {
      addEvent(
        this.config.scrollContainer || window,
        "scroll",
        this.scrollHandler as EventListener
      );
      addEvent(window, "resize", this.scrollHandler as EventListener);
      this.interval = setInterval(this.scrollCallback, 50);
    }
    if (this.config.live) {
      const mut = new MutationObserver((records) => {
        for (let j = 0; j < records.length; j++) {
          const record = records[j];
          for (let k = 0; k < record.addedNodes.length; k++) {
            const node = record.addedNodes[k] as HTMLElement;
            this.doSync(node);
          }
        }
        return undefined;
      });
      mut.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }
  }

  // unbind the scroll event
  stop(): void {
    this.stopped = true;
    removeEvent(
      this.config.scrollContainer || window,
      "scroll",
      this.scrollHandler as EventListener
    );
    removeEvent(window, "resize", this.scrollHandler as EventListener);
    if (this.interval != null) {
      clearInterval(this.interval);
    }
  }

  sync(): void {
    this.doSync(this.element);
  }

  doSync(element?: HTMLElement): void {
    if (typeof element === "undefined" || element === null) {
      element = this.element;
    }
    if (element.nodeType !== 1) {
      return;
    }
    const parent = element.parentNode || element;
    const iterable = (parent as HTMLElement).querySelectorAll(`.${this.config.boxClass}`);
    for (let i = 0; i < iterable.length; i++) {
      const box = iterable[i] as HTMLElement;
      if (!isIn(box, this.all)) {
        this.boxes.push(box);
        this.all.push(box);
        if (this.stopped || this.disabled()) {
          this.resetStyle();
        } else {
          this.applyStyle(box, true);
        }
        this.scrolled = true;
      }
    }
  }

  // show box element
  show(box: HTMLElement): HTMLElement {
    this.applyStyle(box);
    box.className = `${box.className} ${this.config.animateClass}`;
    if (this.config.callback != null) {
      this.config.callback(box);
    }
    emitEvent(box, this.wowEvent);

    addEvent(box, "animationend", this.resetAnimation as EventListener);
    addEvent(box, "oanimationend", this.resetAnimation as EventListener);
    addEvent(box, "webkitAnimationEnd", this.resetAnimation as EventListener);
    addEvent(box, "MSAnimationEnd", this.resetAnimation as EventListener);

    return box;
  }

  applyStyle(box: HTMLElement, hidden?: boolean): void {
    const duration = box.getAttribute("data-wow-duration");
    const delay = box.getAttribute("data-wow-delay");
    const iteration = box.getAttribute("data-wow-iteration");

    this.animate(() =>
      this.customStyle(box, hidden, duration, delay, iteration)
    );
  }

  animate = (function animateFactory() {
    if ("requestAnimationFrame" in window) {
      return (callback: FrameRequestCallback) => window.requestAnimationFrame(callback);
    }
    return (callback: () => void) => callback();
  })();

  resetStyle(): void {
    for (let i = 0; i < this.boxes.length; i++) {
      const box = this.boxes[i];
      box.style.visibility = "visible";
    }
  }

  resetAnimation(event: Event): void {
    if (event.type.toLowerCase().indexOf("animationend") >= 0) {
      const target = (event.target || (event as unknown as { srcElement: HTMLElement }).srcElement) as HTMLElement;
      target.className = target.className
        .replace(this.config.animateClass, "")
        .trim();
    }
  }

  customStyle(box: HTMLElement, hidden?: boolean, duration?: string | null, delay?: string | null, iteration?: string | null): HTMLElement {
    if (hidden) {
      this.cacheAnimationName(box);
    }
    box.style.visibility = hidden ? "hidden" : "visible";

    if (duration) {
      this.vendorSet(box.style, { animationDuration: duration });
    }
    if (delay) {
      this.vendorSet(box.style, { animationDelay: delay });
    }
    if (iteration) {
      this.vendorSet(box.style, { animationIterationCount: iteration });
    }
    this.vendorSet(box.style, {
      animationName: hidden ? "none" : this.cachedAnimationName(box),
    });

    return box;
  }

  vendors = ["moz", "webkit"];
  vendorSet(elem: CSSStyleDeclaration, properties: Record<string, string | undefined>): void {
    for (const name in properties) {
      if (Object.prototype.hasOwnProperty.call(properties, name)) {
        const value = properties[name];
        (elem as unknown as Record<string, string | undefined>)[`${name}`] = value;
        for (let i = 0; i < this.vendors.length; i++) {
          const vendor = this.vendors[i];
          (elem as unknown as Record<string, string | undefined>)[`${vendor}${name.charAt(0).toUpperCase()}${name.substr(1)}`] =
            value;
        }
      }
    }
  }
  vendorCSS(elem: HTMLElement, property: string): string | null {
    const style = getComputedStyleFn(elem);
    let result = style.getPropertyValue(property);
    for (let i = 0; i < this.vendors.length; i++) {
      const vendor = this.vendors[i];
      result = result || style.getPropertyValue(`-${vendor}-${property}`);
    }
    return result;
  }

  animationName(box: HTMLElement): string {
    let aName: string;
    try {
      aName = this.vendorCSS(box, "animation-name") || "";
    } catch {
      // Opera, fall back to plain property value
      aName = getComputedStyleFn(box).getPropertyValue("animation-name") || "";
    }

    if (aName === "none") {
      return ""; // SVG/Firefox, unable to get animation name?
    }

    return aName;
  }

  cacheAnimationName(box: HTMLElement): WeakMap<HTMLElement, string> {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=921834
    // box.dataset is not supported for SVG elements in Firefox
    return this.animationNameCache.set(box, this.animationName(box));
  }
  cachedAnimationName(box: HTMLElement): string | undefined {
    return this.animationNameCache.get(box);
  }

  // fast window.scroll callback
  scrollHandler(): void {
    this.scrolled = true;
  }

  scrollCallback(): void {
    if (this.scrolled) {
      this.scrolled = false;
      const results: HTMLElement[] = [];
      for (let i = 0; i < this.boxes.length; i++) {
        const box = this.boxes[i];
        if (box) {
          if (this.isVisible(box)) {
            this.show(box);
            continue;
          }
          results.push(box);
        }
      }
      this.boxes = results;
      if (!this.boxes.length && !this.config.live) {
        this.stop();
      }
    }
  }

  // Calculate element offset top
  offsetTop(element: HTMLElement): number {
    // SVG elements don't have an offsetTop in Firefox.
    // This will use their nearest parent that has an offsetTop.
    // Also, using ('offsetTop' of element) causes an exception in Firefox.
    let el = element as HTMLElement | null;
    while (el && el.offsetTop === undefined) {
      el = el.parentNode as HTMLElement | null;
    }
    if (!el) return 0;
    let top = el.offsetTop;
    while (el.offsetParent) {
      el = el.offsetParent as HTMLElement;
      top += el.offsetTop;
    }
    return top;
  }

  // check if box is visible
  isVisible(box: HTMLElement): boolean {
    const offset = parseInt(box.getAttribute("data-wow-offset") || String(this.config.offset), 10);
    const viewTop =
      (this.config.scrollContainer && this.config.scrollContainer.scrollTop) ||
      window.pageYOffset;
    const viewBottom =
      viewTop + Math.min(this.element.clientHeight, getInnerHeight()) - offset;
    const top = this.offsetTop(box);
    const bottom = top + box.clientHeight;

    return top <= viewBottom && bottom >= viewTop;
  }

  disabled(): boolean {
    return !this.config.mobile && isMobile(navigator.userAgent);
  }
}
