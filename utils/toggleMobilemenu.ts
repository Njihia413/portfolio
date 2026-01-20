export const openMobilemenu = (): void => {
  document.querySelector(".tmp-popup-mobile-menu")?.classList.add("active");
};

export const closeMobilemenu = (): void => {
  document.querySelector(".tmp-popup-mobile-menu")?.classList.remove("active");
};

export const openMobilemenu2 = (): void => {
  document.querySelector(".mobile-menu-onepage")?.classList.add("active");
};

export const closeMobilemenu2 = (): void => {
  document.querySelector(".mobile-menu-onepage")?.classList.remove("active");
};
