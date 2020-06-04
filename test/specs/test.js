var assert = require("assert")
describe("Google search", () => {
  it("load page successfuly",() => {
    browser.url('/')
    const _header = browser.getTitle()
    expect(browser).toHaveTitle("Google")
    expect($('input[name()="xxxx"')).toBeDisplayed() // expected this to fail as input with name xxx does not exist.
  })
  it("Seach for automation testing",() => {
    browser.url('/')
    const _searchfor = "automation testing"
    browser.keys([_searchfor, "Enter"])
    browser.waitUntil(50);
    expect($$('h3[Text()="xxxx"]')).toBeDisplayed() // expected this to fail as input with name xxx does not exist.
  }) 
  it("Seach for WebdriverIO on google - asyncronous", async () => {
    await browser.url('/')
    const _header = await browser.getTitle()
    expect(browser).toHaveTitle("Google")
    const inputElem = await browser.$('input[name="q"]')
    await inputElem.click()
    await browser.pause(500)
    await inputElem.setValue('WebdriverIO')
    browser.keys(['Enter'])
    await browser.pause(500)
    expect($$('h3[Text()="xxxx"]')).toBeDisplayed() // expected this to fail as input with name xxx does not exist.
  })
})
