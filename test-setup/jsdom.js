import jsdom from "jsdom";
import enzyme, { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

global.render = render;
global.shallow = shallow;
global.mount = mount;

global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window = document.defaultView;
global.navigator = { userAgent: "node.js" };
