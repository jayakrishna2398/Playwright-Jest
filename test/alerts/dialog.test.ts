import { Browser, chromium, BrowserContext, Page } from "playwright/index.js";

describe("Handling the dialog box", () =>{

    let browser: Browser;

    let context: BrowserContext;

    let page: Page;

    beforeAll(async() =>{
        browser = await chromium.launch({
        headless: false
    });

    context = await browser.newContext();

    page = await context.newPage();
    await page.goto("https://letcode.in/alert");

})
test("Handle dialog 1", async() =>{         //*prompt alert*//

    const element = await page.$("#prompt");

    page.on("dialog", (dialog) => {

        console.log('message: ' + dialog.message());

        console.log('Default Value: ' + dialog.defaultValue());

        console.log('Type', dialog.type());

        dialog.accept("hello jk");

        //dialog.dismiss();

    })

    await element?.click();
})
test("Handle dialog 2", async() =>{               //*simple alert*//
    const element2 = await page.$("#accept");

    page.on("dialog", (dialog) =>{
        
        console.log('message: ' + dialog.message());

        console.log('Default Value: ' + dialog.defaultValue());

        console.log('Type', dialog.type());
    })
    await element2?.click();
})
test("Handle dialog 3", async() =>{
    page.on("dialog", (dialog) =>{
        dialog.accept();
    })
})
afterAll(async() => {
    await browser.close();
    await context.close();
    await page.close();
})
})