import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3NyIsInVzZXJuYW1lIjoidXNlciIsImlhdCI6MTUxNzE3OTMzMiwiZXhwIjoxMDAwMTUwNjE3OTMzM30.BGail3BLyCe7dv4DSaKnlzEZj3knME5ROYXQK83SsGg";

configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

global.localStorage = localStorageMock;
