/**
 * @internal
 */
export const execReg = (reg: RegExp, text: string, fn?: (_: string) => boolean): RegExpExecArray[] => {
  const results: RegExpExecArray[] = [];
  let match: RegExpExecArray | null = null;
  while ((match = reg.exec(text))) {
    if (fn && !fn(text)) {
      continue;
    }
    results.push(match);
  }
  return results;
};
