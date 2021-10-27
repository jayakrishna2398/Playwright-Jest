import{chromium,Browser,BrowserContext,Page} from "playwright";
import CommonFunctions from "../../Page/common.page";
import HeaderPage from "../../Page/Header.page";
import LoginPage from "../../Page/login.page";
import Env from "../utils/environment";

describe("TC001", () =>{
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    let header: HeaderPage
    let login: LoginPage
    let commonFunction: CommonFunctions

    beforeAll(async () => {
        browser = await chromium.launch({
            headless: false,
        });
        context = await browser.newContext()
        page = await context.newPage();
        await page.goto(Env.test);
        header = new HeaderPage(page);
        login = new LoginPage(page);
        commonFunction = new CommonFunctions(page);
    })
    test("Login positive", async() =>{
        expect(page.url()).toBe("https://letcode.in/")
        await header.clickLoginLink();
        expect(page.url()).toBe("https://letcode.in/signin")
        await login.enterUserName("jayakrishna2398@gmail.com");
        await login.clickBtn();
        const toaster = await commonFunction.toaster;
        expect(await toaster?.textContent()).toContain(" Welcome Jayakrishna Thirunavarrasu ");
        await header.clickSignOutLink();

    })
    afterAll(async() => {
        await browser.close();
        await context.close();
        await page.close();
    })
})