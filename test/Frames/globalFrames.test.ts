import {chromium,Browser,BrowserContext,Page, ChromiumBrowserContext} from "playwright" 

describe("frames", () =>{
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

beforeAll( async() =>{
    browser = await chromium.launch({
        headless: false
    })
     context = await browser.newContext()
     page = await context.newPage();
    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame")
})
test("Testing frame using global SQA", async() =>{
    const frame = page.frame("input[name='google_esf']")
    // if(frame != null){
         frame?.click("div[class='info_overlay']")
    // }else{
    //     console.log("no frames")
    // }
})
})