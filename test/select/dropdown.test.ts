import { Browser,chromium,BrowserContext,Page } from "playwright/index.js";

describe("handle drop down tests", () => {

let browser: Browser;
let context: BrowserContext;
let page: Page;

beforeAll(async() =>{
    browser = await chromium.launch({
        headless: false
    });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://letcode.in/dropdowns")
})
test("Select fruit", async() =>{
   const element =  await page.$("#fruits");
   await element?.selectOption("1");
   const msg = await page.$("div.notification.is-success");
   if(msg){
       expect(await msg.textContent()).toContain("Mango");
   }
})
test("select superheroes", async() =>{
    const heroes = await page.$("#superheroes");
    await heroes?.selectOption("6"); //*Black Panther*//
    heroes?.selectOption([
        {"label": "Aquaman"}, {"value":"bt"}, {"index": 10}    //*doubt*//
    ])
})

test("counting language options", async() =>{
    const lang = await page.$$("#lang option");
    console.log(lang.length);
})

test("printing the options", async() =>{
    const country = await page.selectOption("#country", "India");
    const text = await page.$eval<string, HTMLSelectElement>("#country", ele => ele.value)
    console.log(text);
    expect(text).toBe("India");
})
afterAll(async() => {
    await browser.close();
    await context.close();
    await page.close();
})
})