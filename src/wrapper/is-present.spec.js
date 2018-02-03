import WrapperBuilder from "./index";
import React from "react";
import { eachEnzymeMethod } from "../../test-setup/each-render-method";

const AnyFixture = () => {
  return null;
};

describe("When component is rendered", () => {
  eachEnzymeMethod(["shallow", "mount"], (renderMethod, methodName) => {
    let anyWrapper;
    before(() => {
      anyWrapper = WrapperBuilder(renderMethod(<AnyFixture />));
    });

    context(methodName, () => {
      it("should be present", () => {
        anyWrapper.isPresent().should.be.true();
      });
    });
  });

  eachEnzymeMethod(["render"], (renderMethod, methodName) => {
    let anyWrapper;
    before(() => {
      anyWrapper = WrapperBuilder(renderMethod(<AnyFixture />));
    });

    context(methodName, () => {
      it("should NOT be present", () => {
        // enzyme 3/cheerio 1 shows null React element as NOT present.
        anyWrapper.isPresent().should.be.false();
      });
    });
  });
});
