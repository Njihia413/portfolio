declare class SplitText {
  chars: HTMLElement[];
  words: HTMLElement[];
  lines: HTMLElement[];
  isSplit: boolean;
  
  constructor(element: string | Element | Element[], options?: {
    type?: string;
    wordsClass?: string;
    charsClass?: string;
    linesClass?: string;
    tag?: string;
    span?: boolean;
    wordDelimiter?: string;
    specialChars?: string[] | ((char: string, chars: string[]) => number | void);
    reduceWhiteSpace?: boolean;
    absolute?: boolean;
    lineThreshold?: number;
  });
  
  split(options?: object): SplitText;
  revert(): SplitText;
  static create(element: string | Element | Element[], options?: object): SplitText;
}

export default SplitText;
