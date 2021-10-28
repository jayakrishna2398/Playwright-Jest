import { Browser, BrowserContext, chromium, Page } from "../../node_modules/playwright";
import HeaderGmail from "../../Page/gmailHeader.page";
import Login from "../../Page/gmailLogin.page";
import Gmail from "../utils/gmail";
import {JestPlaywrightConfig} from "jest-playwright-preset";

declare const page: any;
describe("TC002", () =>{


    let gmailHeader: HeaderGmail
    let gmailLogin: Login

    beforeAll(async () => {
        await page.goto(Gmail.test)
        gmailHeader = new HeaderGmail(page);
        gmailLogin = new Login(page);
    })
    test("Login for gmail",async() =>{
        expect(page.url()).toBe("https://www.google.com/intl/en-GB/gmail/about/#")
         await gmailHeader.logIn();
         expect(page.url()).toBe("https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin")
         await gmailLogin.enterEmailId("jayakrishnaarasu34@gmail.com");

    })
    afterAll(async() => {
        await browser.close();
        await context.close();
        await page.close();
    })
})