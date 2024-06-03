/**
 * @internal
 */
export const execReg = (
  reg: RegExp,
  text: string,
  shouldRender?: (matchedText: string, matchResult: RegExpExecArray) => boolean
): RegExpExecArray[] => {
  const results: RegExpExecArray[] = [];
  let match: RegExpExecArray | null = null;
  while ((match = reg.exec(text))) {
    if (shouldRender && !shouldRender(text, match)) {
      continue;
    }
    results.push(match);
  }
  return results;
};
