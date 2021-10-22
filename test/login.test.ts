import {chromium} from "playwright";
describe('launch browser', () => {

    test('open Facebook', async() => {
        jest.setTimeout(200);

            const browser = await chromium.launch({
                headless: false
            })

            const context = await browser.newContext();

            const page = await context.newPage();

            await page.goto('https://www.google.com/intl/en-GB/gmail/about/#');

            await page.click('text=Sign in');

            await page.fill("input[name ='identifier']", 'jayakrishnaarasu34@gmail.com');

            await page.click('span:text("Next")');

            //await page.click('span:text("Next")');

            //await page.click('button:text("LOGIN")')

            await browser.close();
        })
})