/**
 * @internal
 */
export const execReg = (
  reg: RegExp,
  text: string,
  shouldRender?: (matchedText: string) => boolean
): RegExpExecArray[] => {
  const results: RegExpExecArray[] = [];
  let match: RegExpExecArray | null = null;
  while ((match = reg.exec(text))) {
    if (shouldRender && !shouldRender(text)) {
      continue;
    }
    results.push(match);
  }
  return results;
};
