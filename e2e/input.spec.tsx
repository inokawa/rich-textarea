import type { ReactElement } from "react";
import { useState } from "react";
import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { experimental_RichInput as RichInput } from "../src";

const renderer = (v: string) =>
  v.split("").map((t, i) => (
    <span key={i} style={{ color: i % 2 === 0 ? "red" : undefined }}>
      {t}
    </span>
  ));

const WidthMax = () => {
  const [text, setText] = useState("Lorem ipsum");
  return (
    <RichInput
      style={{ width: "100%" }}
      onChange={(e) => setText(e.target.value)}
      value={text}
    >
      {renderer}
    </RichInput>
  );
};

afterEach(cleanup);

const isVisible = (e: Element) => {
  const rect = e.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
};

const renderInput = async (element: ReactElement) => {
  const container = document.createElement("div");
  container.style.width = "500px";
  document.body.appendChild(container);
  render(element, { container });

  return vi.waitFor(() => {
    const input = container.querySelector("input");
    const backdrop = container.querySelector("div[aria-hidden]")
      ?.parentElement as HTMLElement | undefined;
    expect(input && isVisible(input)).toBeTruthy();
    expect(backdrop && isVisible(backdrop)).toBeTruthy();
    return [container, input!, backdrop!] as const;
  });
};

const getSize = (e: Element): [number, number] => {
  const rect = e.getBoundingClientRect();
  return [rect.width, rect.height];
};

test("width 100%", async () => {
  const [container, input, backdrop] = await renderInput(<WidthMax />);

  // Check initial state
  expect(getSize(backdrop.parentElement!)[0]).toBe(500);
  expect(getSize(input)).toEqual(getSize(backdrop));
  expect(input.value).toBe(backdrop.textContent!.replace(/​$/, ""));

  // Resize container
  container.style.width = "300px";
  await vi.waitFor(() => {
    expect(getSize(backdrop.parentElement!)[0]).toBe(300);
    expect(getSize(input)).toEqual(getSize(backdrop));
  });
});
