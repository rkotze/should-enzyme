function assertKeyValue(actualValue, expectedValue) {
  if(arguments.length > 1)
    return actualValue === expectedValue;

  return typeof actualValue !== 'undefined';
}

export default assertKeyValue;