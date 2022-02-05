export const execReg = (reg: RegExp, text: string): RegExpExecArray[] => {
  const results: RegExpExecArray[] = [];
  let match = reg.exec(text);
  while (!!match) {
    results.push(match);
    match = reg.exec(text);
  }
  return results;
};
