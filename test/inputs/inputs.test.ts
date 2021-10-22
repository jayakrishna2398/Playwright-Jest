import { Browser, BrowserContext, chromium, Page } from "playwright/index.js"

describe("how to handle input fields",() => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    beforeAll(async() =>{

     browser = await chromium.launch({

        headless: false

    });
      context = await browser.newContext();

      page = await context.newPage();

      await page.goto("https://letcode.in/edit")
})
test("enter the full name", async() =>{
    await page.type("id=fullName", "jayakrishna");
    //(or) const name = await page.$("#fullName")
    //await name?.type("Jayakrishna")
})
test("Append a text and press keyboard tab", async() =>{
    //await page.type("id=join", " Dog");
    const join = await page.$("#join")
    await join?.focus();
    await page.keyboard.press("End")
    await join?.type(" Dog")
   
})
test("What is inside the text box", async() =>{
   const text = await page.getAttribute("id=getMe", "value");
    console.log(text);
})
test("Clear the text", async() => {
    await page.fill("id=clearMe", "");

})
afterAll( async() =>{
    await browser.close();
    await context.close();
    await page.close();
})
})