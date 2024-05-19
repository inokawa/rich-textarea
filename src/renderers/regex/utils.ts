/**
 * @internal
 */
export const execReg = (reg: RegExp, text: string): RegExpExecArray[] => {
  const results: RegExpExecArray[] = [];
  let match: RegExpExecArray | null = null;
  while ((match = reg.exec(text))) {
    results.push(match);
  }
  return results;
};
