import { chromium,Browser,BrowserContext,Page } from "playwright/index.js";

describe("searching elements", () =>{
    let browser: Browser

    let context: BrowserContext

    let page: Page

    beforeAll( async() =>{
        browser = await chromium.launch({
            headless: false
        })
        context = await browser.newContext();
        page = await browser.newPage();
        await page.goto("https://letcode.in/elements");
    })
    
    test("github username", async() =>{
        if(page != null){
        await page.fill("input[name='username']","jayakrishna2398");
        await page.click('text = Search');}
        else{ throw new Error("no element found");}
    })
    test("Printing repository", async() =>{
        await page.waitForSelector("app-gitrepos ol li", {timeout: 5000})
        const repository = await page.$$("app-gitrepos ol li");
        console.log(repository.length);
    })
})
