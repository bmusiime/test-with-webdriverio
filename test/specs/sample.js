var assert = require("assert")

describe("Sample", () => {
  it("this is sample - asyncronous", async () => {
    await browser.url('https://www.google.com')
    const searchInput = await browser.$('input[name="q"]')
    await searchInput.setValue('WebdriverIO')
    const searchBtn = await browser.$('input[value="Google Search"]')
    await browser.keys('Enter')
    const title = await browser.getTitle()
    assert.strictEqual(title, "WebdriverIO - Google Search");
  })
})