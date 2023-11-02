import { test, expect, Page, ElementHandle } from "@playwright/test";

const storyUrl = (id: string) =>
  `http://localhost:6006/iframe.html?id=${id}&viewMode=story`;

const getTextarea = async (page: Page) => {
  const textarea = await page.waitForSelector("textarea");
  const backdrop = await textarea.evaluateHandle((e) => e.previousSibling!);
  return [textarea, backdrop] as const;
};

const isFocused = async (handle: ElementHandle) => {
  return handle.evaluate((e) => e === document.activeElement);
};

const getValue = async (
  textarea: ElementHandle<HTMLTextAreaElement>,
  backdrop: ElementHandle
): Promise<[string, string]> => {
  const backdropValue = (await backdrop.textContent())!;

  return [await textarea.inputValue(), backdropValue.replace(/\u200b$/, "")];
};

const getSelection = async (textarea: ElementHandle<HTMLTextAreaElement>) => {
  return textarea.evaluate((e) => [e.selectionStart, e.selectionEnd]);
};

const getSize = async (textarea: ElementHandle): Promise<[number, number]> => {
  const rect = (await textarea.boundingBox())!;
  return [rect.width, rect.height];
};

const getScrollPosition = async (
  handle: ElementHandle
): Promise<[number, number]> => {
  return handle.evaluate((e: HTMLElement) => [e.scrollLeft, e.scrollTop]);
};

const getBackdropPosition = async (
  handle: ElementHandle
): Promise<[number, number]> => {
  return handle.evaluate((e: HTMLElement) => {
    const transform = window.getComputedStyle(e.children[0]).transform;
    const matrix = new DOMMatrix(transform);
    return [matrix.m41, Math.abs(matrix.m42)];
  });
};

const click = async (page: Page, x: number, y: number) => {
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.up();
};

const insertText = (s: string, value: string, index: number): string => {
  return s.slice(0, index) + value + s.slice(index);
};

test("smoke controlled", async ({ page }) => {
  await page.goto(storyUrl("basics-textarea--controlled"));

  const [textarea, backdrop] = await getTextarea(page);

  // Check initial state
  expect(await isFocused(textarea)).toBe(false);
  const [textareaValue, backdropValue] = await getValue(textarea, backdrop);
  expect(textareaValue).toBe(backdropValue);

  // Click and focus
  const textareaRect = (await textarea.boundingBox())!;
  await click(page, textareaRect.x + 1, textareaRect.y + 1);
  expect(await isFocused(textarea)).toBe(true);
  expect(await getSelection(textarea)).toEqual([0, 0]);

  // Move cursor
  await page.keyboard.press("ArrowRight");
  expect(await getSelection(textarea)).toEqual([1, 1]);

  // Type
  const text = "test";
  await page.keyboard.type(text);
  const [editedTextareaValue, editedBackdropValue] = await getValue(
    textarea,
    backdrop
  );
  expect(editedTextareaValue).toBe(insertText(textareaValue, text, 1));
  expect(editedTextareaValue).toBe(editedBackdropValue);

  // Click outside and unfocus
  await click(page, 0, 0);
  expect(await isFocused(textarea)).toBe(false);
});

test("smoke uncontrolled", async ({ page }) => {
  await page.goto(storyUrl("basics-textarea--uncontrolled"));

  const [textarea, backdrop] = await getTextarea(page);

  // Check initial state
  expect(await isFocused(textarea)).toBe(false);
  const [textareaValue, backdropValue] = await getValue(textarea, backdrop);
  expect(textareaValue).toBe(backdropValue);

  // Click and focus
  const textareaRect = (await textarea.boundingBox())!;
  await click(page, textareaRect.x + 1, textareaRect.y + 1);
  expect(await isFocused(textarea)).toBe(true);
  expect(await getSelection(textarea)).toEqual([0, 0]);

  // Move cursor
  await page.keyboard.press("ArrowRight");
  expect(await getSelection(textarea)).toEqual([1, 1]);

  // Type
  const text = "test";
  await page.keyboard.type(text);
  const [editedTextareaValue, editedBackdropValue] = await getValue(
    textarea,
    backdrop
  );
  expect(editedTextareaValue).toBe(insertText(textareaValue, text, 1));
  expect(editedTextareaValue).toBe(editedBackdropValue);

  // Click outside and unfocus
  await click(page, 0, 0);
  expect(await isFocused(textarea)).toBe(false);
});

test("scrollable", async ({ page }) => {
  await page.goto(storyUrl("basics-textarea--search"));

  const [textarea, backdrop] = await getTextarea(page);

  // Check initial state
  expect(await isFocused(textarea)).toBe(false);
  expect(await getSelection(textarea)).toEqual([0, 0]);
  expect(await getScrollPosition(textarea)).toEqual([0, 0]);
  expect(await getScrollPosition(backdrop)).toEqual([0, 0]);

  // Click and focus
  const textareaRect = (await textarea.boundingBox())!;
  await click(page, textareaRect.x + 1, textareaRect.y + 1);
  expect(await isFocused(textarea)).toBe(true);

  // Move caret down
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press("ArrowDown", { delay: 50 });
  }
  expect(await getSelection(textarea)).not.toEqual([0, 0]);
  const textareaPos = await getScrollPosition(textarea);
  expect(textareaPos[0]).toBe(0);
  expect(textareaPos[1]).toBe(0);
  expect(await getBackdropPosition(backdrop)).toEqual(textareaPos);

  // Move caret down and scroll down
  for (let i = 0; i < 50; i++) {
    await page.keyboard.press("ArrowDown", { delay: 50 });
  }
  expect(await getSelection(textarea)).not.toEqual([0, 0]);
  const textareaPos2 = await getScrollPosition(textarea);
  expect(textareaPos2[0]).toBe(0);
  expect(textareaPos2[1]).toBeGreaterThan(100);
  expect(await getBackdropPosition(backdrop)).toEqual(textareaPos2);
});

test("resizable", async ({ page }) => {
  await page.goto(storyUrl("basics-textarea--controlled"));

  const [textarea, backdrop] = await getTextarea(page);

  // Check initial state
  const initialTextareaSize = await getSize(textarea);
  expect(initialTextareaSize).toEqual(await getSize(backdrop));

  // Resize
  await textarea.evaluate((e) => {
    e.style.width = "123px";
    e.style.height = "456px";
  });
  const textareaSize = await getSize(textarea);
  expect(textareaSize).not.toEqual(initialTextareaSize);
  expect(textareaSize).toEqual(await getSize(backdrop));
});

test("ime", async ({ page, browserName }) => {
  test.skip(browserName !== "chromium");

  await page.goto(storyUrl("basics-textarea--controlled"));

  const [textarea, backdrop] = await getTextarea(page);
  const [textareaValue, backdropValue] = await getValue(textarea, backdrop);
  expect(textareaValue).toBe(backdropValue);

  const client = await page.context().newCDPSession(page);
  await textarea.focus();
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

  const [editedTextareaValue, editedBackdropValue] = await getValue(
    textarea,
    backdrop
  );
  expect(editedTextareaValue).toBe(insertText(textareaValue, "😂😭", 0));
  expect(editedTextareaValue).toBe(editedBackdropValue);
});
