import { shallow, mount, render } from "enzyme";

export function eachEnzymeMethod(methodNames, fn) {
  const methods = {
    shallow: shallow,
    mount: mount,
    render: render
  };

  methodNames.forEach((methodName, i) => {
    fn(methods[methodName], methodName);
  });
}
