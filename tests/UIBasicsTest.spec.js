const {test} = require('@playwright/test')


test('Browser Playwright Case', async ({browser}) => {
    
    // Opening browser as new context - where none of the plugins and cookies are available
    const context = await browser.newContext()
    
    // Opening new page in the browser
    const page = await context.newPage()

    // assigning URL - https://rahulshettyacademy.com/
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
})

test('Page Playwright Case', async ({page}) => {
    
    // Opening browser as new context - where none of the plugins and cookies are available
    // const context = await browser.newContext()
    
    // Opening new page in the browser
    // const page = await context.newPage()

    // assigning URL
    await page.goto("https://google.com/")
})