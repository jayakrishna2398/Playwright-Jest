import { chromium } from "playwright";
describe('launch browser', () => {

    test('open SuperSet', async() => {
        jest.setTimeout(200);

        const browser = await chromium.launch({
            headless: false
        })

        const context = await browser.newContext();
        const page  = await context.newPage();

        await page.goto("https://joinsuperset.com/");

        await page.click('text = Login');

        await page.fill("input[name = 'email']", 'jayakrishna2398@gmail.com');

        //await page.click('input:value("Login")');

        await page.close();
    })
})