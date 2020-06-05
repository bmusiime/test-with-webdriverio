var assert = require("assert")
describe("Google search", () => {
  it("load page successfuly",async() => {
    await browser.url('/')
    const _header = await browser.getTitle()
    await expect(browser).toHaveTitle("Google")
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
    expect($$('h3[Text()="WebdriverIO"]')).toBeDisplayed() // expected this to fail as input with name xxx does not exist.
  })
})
