var assert = require("assert")
describe("Google search", () => {
  it("Seach for automation testing",async() => {
    await browser.url('/')
    const _searchfor = "automation testing"
    await browser.keys([_searchfor, "Enter"])
    assert.strictEqual(true, true)
    const title = await browser.getTitle()
    console.log(title)
    await expect(browser).toHaveTitle("automation testing - Google Search")
  }) 
})
