import { chromium,Browser,BrowserContext,Page } from "playwright/index.js";

describe("upload test", () =>{
    const filePath0 = "../letPlayWright/videos/a.webm"
    test("veed upload test", async() =>{
        const browser = await chromium.launch({
            headless: false
    })
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.veed.io/tools/add-photo-to-video")
    const button = await page.$("#w-node-_80cb8ecf-b269-21fc-5681-0a3963b1bbb9-37b2b560")
    await button?.type("Choose Video")
})
})



//#w-node-_80cb8ecf-b269-21fc-5681-0a3963b1bbb9-37b2b560 > a



// <div class="DropzoneCTAstyled__Wrapper-sc-1opbk94-0 kXfYLX"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="DropzoneCTAstyled__Icon-sc-1opbk94-1 iJjTy"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16 16l-4-4-4 4M12 12v9"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16 16l-4-4-4 4"></path></svg><div class="DropzoneCTAstyled__HeadingWrapper-sc-1opbk94-4 eOHff"><span class="DropzoneCTAstyled__Heading-sc-1opbk94-2 ePIJtG">Upload a File</span><span class="DropzoneCTAstyled__Subheading-sc-1opbk94-3 gSyvpT">Click to <span class="browse-link" style="color: rgb(0, 152, 253);">browse</span>, or
// drag &amp; drop your file here</span></div></div>

//body > div.Overlay-sc-2pwypl-0.gCbFGt.modalOverlay > div > div > div > div > div > div > div.RootViewstyled__DropzoneUploadWrapper-sc-fenw50-2.cRNiFW > div.
