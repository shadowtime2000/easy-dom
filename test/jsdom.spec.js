const { expect } = require("chai");
const { JSDOM } = require("jsdom");
const { readFileSync } = require("fs");
const { join } = require("path");

const { window } = new JSDOM("<!DOCTYPE html><html></html>", {
  runScripts: "dangerously",
});

describe("#easy-dom", () => {
  before(() => {
    window.eval(readFileSync(join(__dirname, "../src/index.js")).toString());
  });

  it("should exist", () => {
    expect(window.DOM).to.not.equal(undefined, "window.DOM does not exist");
  });

  it("should be typeof object", () => {
    expect(typeof window.DOM === "object", "window.DOM is not an object");
  });
});
