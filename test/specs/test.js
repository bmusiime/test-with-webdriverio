var assert = require("assert");

describe("Google search", function () {
  it("load page successfuly", function () {
    const _header = browser.getTitle();
    expect(browser).toHaveTitle("Google");
    expect($('input[name()="xxxx"')).toBeDisplayed(); // expected this to fail as input with name xxx does not exist.
  });

  it("Seach for content", function () {
    const _searchfor = "automation testing";
    browser.keys([_searchfor, "Enter"]);
    browser.waitUntil(50);
    expect($$("h3[Text()=" + _searchfor + "]")).toBeDisplayed();
  });
});
