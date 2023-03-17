export const isSafari = (): boolean => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") <= -1;
};

const TEXT_STYLE_KEYS: (keyof React.CSSProperties)[] = [
  "direction",
  "padding",
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "margin",
  "marginTop",
  "marginBottom",
  "marginLeft",
  "marginRight",
  "border",
  "borderWidth",
  "borderTopWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderStyle",
  "borderTopStyle",
  "borderBottomStyle",
  "borderLeftStyle",
  "borderRightStyle",
  "fontSize",
  "fontFamily",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "fontStretch",
  "fontSizeAdjust",
  "textAlign",
  "textTransform",
  "textIndent",
  "letterSpacing",
  "wordSpacing",
  "lineHeight",
  "whiteSpace",
  "wordBreak",
  "overflowWrap",
  "tabSize",
  "MozTabSize",
];

const getPropertyValue = (style: CSSStyleDeclaration, key: string): string => {
  return style.getPropertyValue(key);
};
const setProperty = (
  style: CSSStyleDeclaration,
  key: string,
  value: string
) => {
  style.setProperty(key, value);
};

const getValueFromStyle = (style: CSSStyleDeclaration, key: string): number => {
  const value = getPropertyValue(style, key);
  if (!value) {
    return 0;
  } else {
    return parseInt(value, 10);
  }
};

export const getStyle = (e: Element) => getComputedStyle(e);

export const hasPercentageUnit = (
  widthOrHeight: React.CSSProperties["width"] | React.CSSProperties["height"]
): boolean => {
  return typeof widthOrHeight === "string" && widthOrHeight.endsWith("%");
};

export const getVerticalPadding = (style: CSSStyleDeclaration): number => {
  return (
    getValueFromStyle(style, "padding-top") +
    getValueFromStyle(style, "padding-bottom") +
    getValueFromStyle(style, "border-top") +
    getValueFromStyle(style, "border-bottom")
  );
};

export const getHorizontalPadding = (style: CSSStyleDeclaration): number => {
  return (
    getValueFromStyle(style, "padding-left") +
    getValueFromStyle(style, "padding-right") +
    getValueFromStyle(style, "border-left") +
    getValueFromStyle(style, "border-right")
  );
};

export const getPointedElement = (
  textarea: HTMLElement,
  backdrop: HTMLElement,
  e: MouseEvent
): HTMLElement | null => {
  const POINTER_EVENTS = "pointer-events";

  const textareaStyle = textarea.style;
  const backdropStyle = backdrop.style;
  const prev = getPropertyValue(textareaStyle, POINTER_EVENTS);
  const backPrev = getPropertyValue(backdropStyle, POINTER_EVENTS);
  setProperty(textareaStyle, POINTER_EVENTS, "none");
  setProperty(backdropStyle, POINTER_EVENTS, "auto");

  const pointed = document.elementFromPoint(
    e.clientX,
    e.clientY
  ) as HTMLElement | null;

  setProperty(textareaStyle, POINTER_EVENTS, prev);
  setProperty(backdropStyle, POINTER_EVENTS, backPrev);

  if (isInsideBackdrop(pointed, backdrop)) {
    return pointed;
  } else {
    return null;
  }
};

const isInsideBackdrop = (
  pointed: HTMLElement | null,
  backdrop: HTMLElement
): boolean => !!pointed && backdrop !== pointed && backdrop.contains(pointed);

const dispatchMouseEvent = (
  target: HTMLElement,
  type: string,
  init: MouseEventInit
) => {
  target.dispatchEvent(new MouseEvent(type, init));
};

export const dispatchClonedMouseEvent = (
  pointed: HTMLElement,
  e: MouseEvent
) => {
  dispatchMouseEvent(pointed, e.type, e);
};

export const dispatchMouseMoveEvent = (
  pointed: HTMLElement | null,
  prevPointed: React.MutableRefObject<HTMLElement | null>,
  e: MouseEvent
) => {
  if (pointed) {
    dispatchClonedMouseEvent(pointed, e);
  }

  if (prevPointed.current !== pointed) {
    dispatchMouseOutEvent(prevPointed, e, pointed);
    if (pointed) {
      dispatchMouseEvent(pointed, "mouseover", e);
    }
  }
};

export const dispatchMouseOutEvent = (
  prevPointed: React.MutableRefObject<HTMLElement | null>,
  e: MouseEvent,
  pointed: HTMLElement | null
) => {
  if (prevPointed.current) {
    dispatchMouseEvent(prevPointed.current, "mouseout", e);
  }
  prevPointed.current = pointed;
};

export const stopPropagation = (event: React.MouseEvent) => {
  event.stopPropagation();
};

export const syncBackdropStyle = (
  textarea: HTMLElement,
  backdrop: HTMLElement,
  caretColorRef: React.MutableRefObject<string>,
  style?: React.CSSProperties
) => {
  const computedTextAreaStyle = getStyle(textarea);
  const textareaStyle = textarea.style;
  const backdropStyle = backdrop.style;
  if (!caretColorRef.current) {
    caretColorRef.current = getPropertyValue(computedTextAreaStyle, "color");
  }

  TEXT_STYLE_KEYS.forEach((k) => {
    backdropStyle[k as any] = computedTextAreaStyle[k as any]!;
  });
  textareaStyle.color = backdropStyle.borderColor = "transparent";
  textareaStyle.caretColor = style?.caretColor || caretColorRef.current;
};
