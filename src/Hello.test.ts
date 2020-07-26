import { Hello } from "./Hello";

describe("Hello", () => {
  describe("#message", () => {
    it("returns Hello world", () => {
      const hello = new Hello();
      expect(hello.message).toEqual("Hello world");
    })
  })
});
