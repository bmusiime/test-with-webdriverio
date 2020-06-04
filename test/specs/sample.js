var assert = require("assert")

describe("Sample", () => {
  it("this is sample - asyncronous", async () => {
    await browser.url('https://www.google.com')

    const searchInput = await browser.$('input[name="q"]')
    await searchInput.setValue('WebdriverIO')

    const searchBtn = await browser.$('input[value="Google Search"]')
    await browser.keys('Enter')
    // await searchBtn.click()//not clickable
    const title = await browser.getTitle()
    console.log(title) // outputs "title"
    assert.strictEqual(title, "WebdriverIO - Google Search");
    // await browser.deleteSession()
  })
})