const {test} = require('@playwright/test')
const {expect} = require('@playwright/test')


test.only('Browser Playwright Case', async ({browser}) => {
    
    // Opening browser as new context - where none of the plugins and cookies are available
    const context = await browser.newContext()
    
    // Opening new page in the browser
    const page = await context.newPage()

    // assigning URL - https://rahulshettyacademy.com/
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    await page.locator("#username").fill("testUser123")
    await page.locator("[type='password']").fill("Test@123")
    await page.locator("#signInBtn").click()

    console.log(await page.locator("[style*='block']").textContent())
})

test('Page Playwright Case', async ({page}) => {
    // assigning URL
    await page.goto("https://google.com/")
    // Method 1 of assertion or expect output
    const title = await page.title()
    console.log(title)

    await expect(page).toHaveTitle("Google")
})