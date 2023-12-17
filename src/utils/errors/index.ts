const sourceFileRegex = new RegExp(/at (.*) /);

const getErrorLocation = (): string => {
  const stacktrace = new Error().stack;
  if (!stacktrace) {
    return 'no-trace';
  }
  const lines = stacktrace.split('\n');
  if (lines.length < 4) {
    return 'no-trace';
  }
  const sourceLine = lines[3];
  const regexCapture = sourceFileRegex.exec(sourceLine);
  if (!regexCapture || regexCapture.length < 2) {
    return 'no-trace';
  }
  const sourceFile = regexCapture[1];
  return sourceFile;
};

const throwError = (message: string) => {
  const location = getErrorLocation();
  const formatedMessage = `(${location}): ${message}`;
  throw new Error(formatedMessage);
};

export default throwError;
