import { createId } from "./createId";

jest.mock("nanoid", () => ({
  customAlphabet: jest.fn().mockImplementation(() => "SomeRandomString"),
}));

it("return nanoid result with given prefix", () => {
  expect(createId("prefix")).toEqual("prefix:SomeRandomString");
});
