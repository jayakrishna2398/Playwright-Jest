import { Browser,BrowserContext,chromium,Page } from "../../node_modules/playwright";

describe("Another browser test", () =>{
    let browser: Browser
    let context: BrowserContext
    let page: Page

    beforeAll(async()=>{
        browser = await chromium.launch({
            headless: false,
            channel: "chrome"
        })
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin")
    })

    test("testing another browser title facebook", async() =>{
        const title = await page.title();
        console.log(title);
        expect(title).toBe("Gmail");
    })
})