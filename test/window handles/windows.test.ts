import { Browser,chromium,BrowserContext,Page } from "playwright/index.js";

describe("handling windows", () => {

let browser: Browser;
let context: BrowserContext;
let page: Page;

beforeAll(async() =>{
    browser = await chromium.launch({
        headless: false
    });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://letcode.in/windows")
})
test("HomePage", async() =>{
    console.log(await page.title());
    expect(await page.title()).toBe("Window handling - LetCode");
})
xtest("single page handling", async() => {
    const[newWindow] = await Promise.all([
        context.waitForEvent("page"),
        await page.click("#home")
    ])
    await newWindow.waitForLoadState()
    expect(newWindow.url()).toContain("test");
    await newWindow.click('"Log in"');
    expect(newWindow.url()).toContain("signin");
    await Promise.all([
        page.waitForNavigation(),
        await newWindow.close(),
        page.click('"Courses"')
      ]);
})

test("Multi page handling", async()=>{
    const [multiWindows] = await Promise.all([
        context.waitForEvent("page"),
        await page.click("#multi")
    ])
    await multiWindows.waitForLoadState();
    const pages = multiWindows.context().pages();
    console.log("No of pages", + pages.length);
    pages.forEach(page =>{
        console.log(page.url());
    })
    //*dialog box*//
        pages[1].on("dialog", (dialog) =>{
            
            console.log('message: ' + dialog.message());
            dialog.accept();
        })
        await pages[1].click("id=accept");
    })
     afterAll(async() => {
      await browser.close();
      await context.close();
     await page.close();
  })
})