import { JSDOM } from "jsdom";
import enzyme, { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

global.render = render;
global.shallow = shallow;
global.mount = mount;

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js"
};
