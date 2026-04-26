require('dotenv').config({path: '.env.assignment1'})
const {test, expect} = require('@playwright/test')

test('Assignment 1 - Login and fetch 1st product title', async ({page}) => {
    const userName = page.locator("#userEmail")
    const password = page.locator("[type='password']")

    await page.goto(process.env.URL)

    await userName.fill(process.env.ASSIGNMENT1_USERNAME)
    await password.fill(process.env.ASSIGNMENT1_PASSWORD)
    await page.locator("#login").click()

    await expect(page).toHaveTitle("Let's Shop")

    console.log(await page.locator(".card-body b").first().textContent())
    expect(await page.locator(".card-body b").first().textContent()).toBe("ADIDAS ORIGINAL")
})