import type { ReactElement } from "react";
import { useState } from "react";
import { afterEach, expect, test, vi } from "vitest";
import type {} from "@vitest/browser-playwright";
import { cdp, server, userEvent } from "vitest/browser";
import { cleanup, render } from "@testing-library/react";
import { createRegexRenderer, RichTextarea } from "../src";

const style = { width: "600px", height: "400px" };

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
const LONG_LOREM = Array.from({ length: 20 }, () => LOREM).join("\n");

const renderer = (v: string) =>
  v.split("").map((t, i) => <span key={i}>{t}</span>);

const Controlled = () => {
  const [text, setText] = useState("Lorem ipsum");
  return (
    <RichTextarea
      style={style}
      onChange={(e) => setText(e.target.value)}
      value={text}
    >
      {renderer}
    </RichTextarea>
  );
};

const Uncontrolled = () => {
  return (
    <RichTextarea style={style} defaultValue="Lorem ipsum">
      {renderer}
    </RichTextarea>
  );
};

const highlightRenderer = createRegexRenderer([
  [/dolor/gi, { backgroundColor: "yellow" }],
]);

const Scrollable = () => {
  const [text, setText] = useState(LONG_LOREM);
  return (
    <RichTextarea
      style={style}
      onChange={(e) => setText(e.target.value)}
      value={text}
    >
      {highlightRenderer}
    </RichTextarea>
  );
};

const decoratedRenderer = (v: string) =>
  v.split("").map((t, i) => (
    <span key={i} style={{ color: i % 2 === 0 ? "red" : undefined }}>
      {t}
    </span>
  ));

const WidthMax = () => {
  const [text, setText] = useState("Lorem ipsum");
  return (
    <RichTextarea
      style={{ border: "solid 2px grey", padding: "0.5rem", width: "100%" }}
      onChange={(e) => setText(e.target.value)}
      value={text}
    >
      {decoratedRenderer}
    </RichTextarea>
  );
};

const BorderBox = () => {
  const [text, setText] = useState("Lorem ipsum");
  return (
    <>
      <RichTextarea
        style={{
          border: "solid 2px grey",
          padding: "0.5rem",
          width: 300,
          height: 200,
        }}
        onChange={(e) => setText(e.target.value)}
        value={text}
      >
        {decoratedRenderer}
      </RichTextarea>
      <style>{`*, *:before, *:after { box-sizing: border-box }`}</style>
    </>
  );
};

afterEach(cleanup);

const isVisible = (e: Element) => {
  const rect = e.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
};

const renderTextarea = async (element: ReactElement) => {
  const container = document.createElement("div");
  // Keep a clickable area outside of the textarea.
  container.style.padding = "1rem";
  document.body.appendChild(container);
  render(element, { container });

  // Same as waiting for locators to be visible in playwright: the backdrop is
  // sized after the textarea is measured.
  return vi.waitFor(() => {
    const textarea = container.querySelector("textarea");
    const backdrop = container.querySelector("div[aria-hidden]")
      ?.parentElement as HTMLElement | undefined;
    expect(textarea && isVisible(textarea)).toBeTruthy();
    expect(backdrop && isVisible(backdrop)).toBeTruthy();
    return [textarea!, backdrop!] as const;
  });
};

/** Check that the rendered text area of backdrop is aligned with textarea. */
const expectAligned = (
  textarea: HTMLTextAreaElement,
  backdrop: HTMLElement,
) => {
  const textareaRect = textarea.getBoundingClientRect();
  const backdropRect = backdrop.getBoundingClientRect();
  const contentRect = backdrop.children[0]!.getBoundingClientRect();
  expect([backdropRect.width, backdropRect.height]).toEqual([
    textareaRect.width,
    textareaRect.height,
  ]);
  expect([contentRect.x, contentRect.y, contentRect.width]).toEqual([
    textareaRect.x,
    textareaRect.y,
    textareaRect.width,
  ]);
};

const moveCaretToEnd = async (textarea: HTMLTextAreaElement) => {
  await clickAt(textarea, 1, 1);
  textarea.setSelectionRange(textarea.value.length, textarea.value.length);
};

const isFocused = (e: Element) => e === document.activeElement;

const getValue = (
  textarea: HTMLTextAreaElement,
  backdrop: HTMLElement,
): [string, string] => {
  return [textarea.value, backdrop.textContent!.replace(/\u200b$/, "")];
};

const getSelection = (textarea: HTMLTextAreaElement) => {
  return [textarea.selectionStart, textarea.selectionEnd];
};

const getSize = (e: Element): [number, number] => {
  const rect = e.getBoundingClientRect();
  return [rect.width, rect.height];
};

const getScrollPosition = (e: Element): [number, number] => {
  return [e.scrollLeft, e.scrollTop];
};

const getBackdropPosition = (e: Element): [number, number] => {
  const transform = window.getComputedStyle(e.children[0]!).transform;
  const matrix = new DOMMatrix(transform);
  return [matrix.m41, Math.abs(matrix.m42)];
};

/** Click the position relative to the element, like `page.mouse` in playwright. */
const clickAt = async (e: Element, x: number, y: number) => {
  await userEvent.click(e, { position: { x, y } });
};

const pressKey = async (key: string, count = 1) => {
  for (let i = 0; i < count; i++) {
    await userEvent.keyboard(`{${key}}`);
  }
};

const insertText = (s: string, value: string, index: number): string => {
  return s.slice(0, index) + value + s.slice(index);
};

test("smoke controlled", async () => {
  const [textarea, backdrop] = await renderTextarea(<Controlled />);

  // Check initial state
  expect(isFocused(textarea)).toBe(false);
  const [textareaValue, backdropValue] = getValue(textarea, backdrop);
  expect(textareaValue).toBe(backdropValue);

  // Click and focus
  await clickAt(textarea, 1, 1);
  expect(isFocused(textarea)).toBe(true);
  expect(getSelection(textarea)).toEqual([0, 0]);

  // Move cursor
  await pressKey("ArrowRight");
  expect(getSelection(textarea)).toEqual([1, 1]);

  // Type
  const text = "test";
  await userEvent.keyboard(text);
  await vi.waitFor(() => {
    const [editedTextareaValue, editedBackdropValue] = getValue(
      textarea,
      backdrop,
    );
    expect(editedTextareaValue).toBe(insertText(textareaValue, text, 1));
    expect(editedTextareaValue).toBe(editedBackdropValue);
  });

  // Click outside and unfocus
  await clickAt(document.documentElement, 0, 0);
  expect(isFocused(textarea)).toBe(false);
});

test("smoke uncontrolled", async () => {
  const [textarea, backdrop] = await renderTextarea(<Uncontrolled />);

  // Check initial state
  expect(isFocused(textarea)).toBe(false);
  const [textareaValue, backdropValue] = getValue(textarea, backdrop);
  expect(textareaValue).toBe(backdropValue);

  // Click and focus
  await clickAt(textarea, 1, 1);
  expect(isFocused(textarea)).toBe(true);
  expect(getSelection(textarea)).toEqual([0, 0]);

  // Move cursor
  await pressKey("ArrowRight");
  expect(getSelection(textarea)).toEqual([1, 1]);

  // Type
  const text = "test";
  await userEvent.keyboard(text);
  await vi.waitFor(() => {
    const [editedTextareaValue, editedBackdropValue] = getValue(
      textarea,
      backdrop,
    );
    expect(editedTextareaValue).toBe(insertText(textareaValue, text, 1));
    expect(editedTextareaValue).toBe(editedBackdropValue);
  });

  // Click outside and unfocus
  await clickAt(document.documentElement, 0, 0);
  expect(isFocused(textarea)).toBe(false);
});

test("scrollable", async () => {
  const [textarea, backdrop] = await renderTextarea(<Scrollable />);

  // Check initial state
  expect(isFocused(textarea)).toBe(false);
  expect(getSelection(textarea)).toEqual([0, 0]);
  expect(getScrollPosition(textarea)).toEqual([0, 0]);
  expect(getScrollPosition(backdrop)).toEqual([0, 0]);

  // Click and focus
  await clickAt(textarea, 1, 1);
  expect(isFocused(textarea)).toBe(true);

  // Move caret down
  await pressKey("ArrowDown", 10);
  expect(getSelection(textarea)).not.toEqual([0, 0]);
  const textareaPos = getScrollPosition(textarea);
  expect(textareaPos[0]).toBe(0);
  expect(textareaPos[1]).toBe(0);
  await vi.waitFor(() => {
    expect(getBackdropPosition(backdrop)).toEqual(textareaPos);
  });

  // Move caret down and scroll down
  await pressKey("ArrowDown", 50);
  expect(getSelection(textarea)).not.toEqual([0, 0]);
  const textareaPos2 = getScrollPosition(textarea);
  expect(textareaPos2[0]).toBe(0);
  expect(textareaPos2[1]).toBeGreaterThan(100);
  await vi.waitFor(() => {
    expect(getBackdropPosition(backdrop)).toEqual(textareaPos2);
  });
});

test("resizable", async () => {
  const [textarea, backdrop] = await renderTextarea(<Controlled />);

  // Check initial state
  const initialTextareaSize = getSize(textarea);
  expect(initialTextareaSize).toEqual(getSize(backdrop));

  // Resize
  textarea.style.width = "123px";
  textarea.style.height = "456px";
  await vi.waitFor(() => {
    const textareaSize = getSize(textarea);
    expect(textareaSize).not.toEqual(initialTextareaSize);
    expect(textareaSize).toEqual(getSize(backdrop));
  });
});

test.skipIf(server.browser !== "chromium")("ime", async () => {
  const [textarea, backdrop] = await renderTextarea(<Controlled />);

  const [textareaValue, backdropValue] = getValue(textarea, backdrop);
  expect(textareaValue).toBe(backdropValue);

  const client = cdp();
  textarea.focus();
  await client.send("Input.imeSetComposition", {
    selectionStart: -1,
    selectionEnd: -1,
    text: "😂😂",
  });
  await client.send("Input.imeSetComposition", {
    selectionStart: 1,
    selectionEnd: 2,
    text: "😭",
  });
  await client.send("Input.insertText", {
    text: "😂😭",
  });

  await vi.waitFor(() => {
    const [editedTextareaValue, editedBackdropValue] = getValue(
      textarea,
      backdrop,
    );
    expect(editedTextareaValue).toBe(insertText(textareaValue, "😂😭", 0));
    expect(editedTextareaValue).toBe(editedBackdropValue);
  });
});

test("width 100%", async () => {
  const [textarea, backdrop] = await renderTextarea(<WidthMax />);
  const container = backdrop.parentElement!.parentElement!;

  // Check initial state
  expect(getSize(backdrop.parentElement!)[0]).toBe(
    container.clientWidth -
      parseFloat(getComputedStyle(container).paddingLeft) -
      parseFloat(getComputedStyle(container).paddingRight),
  );
  expectAligned(textarea, backdrop);

  // Resize container
  const initialSize = getSize(textarea);
  container.style.width = "300px";
  await vi.waitFor(() => {
    expect(getSize(textarea)[0]).toBeLessThan(initialSize[0]);
    expectAligned(textarea, backdrop);
  });
});

test("border-box", async () => {
  const [textarea, backdrop] = await renderTextarea(<BorderBox />);

  expect(getComputedStyle(textarea).boxSizing).toBe("border-box");
  expect(getSize(textarea)).toEqual([300, 200]);
  await vi.waitFor(() => {
    expectAligned(textarea, backdrop);
  });

  // Type
  await moveCaretToEnd(textarea);
  await userEvent.keyboard(" dolor");
  await vi.waitFor(() => {
    const [textareaValue, backdropValue] = getValue(textarea, backdrop);
    expect(textareaValue).toBe("Lorem ipsum dolor");
    expect(textareaValue).toBe(backdropValue);
    expectAligned(textarea, backdrop);
  });
});
