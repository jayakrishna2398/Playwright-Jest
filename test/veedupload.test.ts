import { chromium,Browser,BrowserContext,Page } from "playwright/index.js";

describe("upload test", () =>{
    const filePath0 = "E:\letPlayWright\a.webm"

test('veed upload video', async () => {
    const browser = await chromium.launch({
        headless: false
})
const context = await browser.newContext();
const page = await context.newPage();
    // Go to https://www.veed.io/
    await page.goto('https://www.veed.io/');
    // Click a:has-text("Upload Your Video")
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://www.veed.io/edit/65ae1aef-50c7-4ac3-a857-e7392c32cd33' }*/),
      page.click('a:has-text("Upload Your Video")')
    ]);
    
    await page.click('.DropzoneCTAstyled__Wrapper-sc-1opbk94-0');
    page.on("filechooser" , async(filechooser) => {
        await filechooser.setFiles(filePath0);
    })
    
  });
})


