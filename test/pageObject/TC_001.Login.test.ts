import CommonFunctions from "../../Page/common.page";
import HeaderPage from "../../Page/Header.page";
import LoginPage from "../../Page/login.page";
import Env from "../utils/environment";
import {JestPlaywrightConfig} from "jest-playwright-preset";
import ReportUtils from "../utils/reportUtils";

    declare const reporter: any;

describe("TC001", () =>{

    let header: HeaderPage
    let login: LoginPage
    let commonFunction: CommonFunctions

    beforeAll(async () => {
        await page.goto(Env.test);
        header = new HeaderPage(page);
        login = new LoginPage(page);
        commonFunction = new CommonFunctions(page);

    })
    test("Login positive", async() =>{
        await reporter
        .description("Login into application")
        .story("BOND-007");
        await reporter.startStep("Navigate to let code");
        expect(page.url()).toBe("https://letcode.in/")
        await ReportUtils.screenshot("username");
        await reporter.endStep();
        await reporter.startStep("Click login link");
        await header.clickLoginLink();
        expect(page.url()).toBe("https://letcode.in/signin")
        await reporter.endStep();
        await reporter.startStep("enter user name");
        await login.enterUserName("jayakrishna2398@gmail.com");
        await ReportUtils.screenshot();
        await reporter.endStep();
        await reporter.startStep("enter password");
        await reporter.endStep();
        await login.clickBtn();
        const toaster = await commonFunction.toaster;
        expect(await toaster?.textContent()).toContain(" Welcome Jayakrishna Thirunavarrasu ");
       await reporter.startStep("sign out");
        await header.clickSignOutLink();
        await reporter.endStep();
    })
    afterAll(async() => {
        await browser.close();
        await context.close();
        await page.close();
    })
})