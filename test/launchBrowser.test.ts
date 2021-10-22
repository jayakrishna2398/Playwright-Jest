import {chromium} from "playwright";
describe('launch browser', () => {

    test('open Facebook', async() => {
        jest.setTimeout(200);

            const browser = await chromium.launch({
                headless: false
            })

            const context = await browser.newContext();

            const page = await context.newPage();

            await page.goto('https://facebook.com')

            await browser.close()
        })
})