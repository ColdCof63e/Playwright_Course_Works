const {test} = require('@playwright/test')
const {expect} = require('@playwright/test')


test.only('Browser Playwright Case', async ({browser}) => {
    
    // Opening browser as new context - where none of the plugins and cookies are available
    const context = await browser.newContext()
    
    // Opening new page in the browser
    const page = await context.newPage()

    const userName = page.locator("#username")
    const password = page.locator("[type='password']")
    const signInBtn = page.locator("#signInBtn")

    // assigning URL - https://rahulshettyacademy.com/
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    await userName.fill("testUser123")
    await password.fill("Test@123")
    await signInBtn.click()

    console.log(await page.locator("[style*='block']").textContent())
    await expect(page.locator("[style*='block']")).toContainText("Incorrect")

    // To clear the text field(s) and type again
    await userName.fill("")
    await userName.type("rahulshettyacademy")
    await password.fill("")
    await password.type("Learning@830$3mK2")
    await signInBtn.click()

    await expect(page).toHaveTitle("ProtoCommerce")

    // Array logic to get the first product title
    // console.log(await page.locator(".card-body a").nth(0).textContent())

    // To get the first product title
    console.log(await page.locator(".card-body a").first().textContent())

    // Using for loop to get all the product titles
    const allLinks = await page.locator('.card-body a')

    const count = await allLinks.count()

    for(const link of await allLinks.all()) {
        const text = await link.textContent()
        console.log(text)
    }
})

test('Page Playwright Case', async ({page}) => {
    // assigning URL
    await page.goto("https://google.com/")
    // Method 1 of assertion or expect output
    const title = await page.title()
    console.log(title)

    await expect(page).toHaveTitle("Google")
})