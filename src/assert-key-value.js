const assertKeyValue = (actualValue, expectedValue) => {
  if(typeof expectedValue !== 'undefined')
    return actualValue === expectedValue;

  return typeof actualValue !== 'undefined';
};

export default assertKeyValue;