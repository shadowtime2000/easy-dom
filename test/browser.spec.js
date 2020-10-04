const { expect } = require("chai");

window.DOM = document;

describe("#easy-dom", () => {
  it("should exist", () => {
    expect(window.DOM).to.not.equal(undefined, "window.DOM does not exist");
  });

  it("should be typeof object", () => {
    expect(typeof window.DOM === "object", "window.DOM is not an object");
  });

  it("should deep equal document", () => {
    expect(window.DOM).to.eql(
      document,
      "window.DOM is not deep equal to document"
    );
  });
});
