import { Browser, BrowserContext, chromium, Page } from "playwright/index.js";

describe("inputs field using gmail",() => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

beforeAll( async() =>{
        browser = await chromium.launch({
        headless: false
    });
    context = await browser.newContext();
    page =  await context.newPage();
    await page.goto("https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=SignUp")

})

test("First Name", async() =>{
    await page.type("id=firstName", "jayakrishna");
    //const name = await page.$("#id")
    //await name?.type("jayakrishna")
})
test("Last Name", async() =>{
    //await page.type("id=lastName", "Thirunavarrasu");
    const lastName = await page.$("#lastName")
    await lastName?.type("Thirunavarrasu")
})
test("UserName", async() => {
    const userName = await page.$("#username");
    await userName?.type("jayakrishnath2234");
})
test("Password", async() => {
    const password = await page.$("#Passwd");
    await password?.type("pass@123");
})
test("confirm Password", async() => {
    const password = await page.$("#ConfirmPasswd");
    await password?.type("pass@123");
})
afterAll(async() =>{
    await browser.close();
    await context.close();
    await page.close();

})
})