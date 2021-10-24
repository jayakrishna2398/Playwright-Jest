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
    await page.goto("https://letcode.in/frame")
})

//testing with single frame
test("Interaction with frames", async() =>{
   const frame = page.frame({name: "firstFr"})   //iframe tag should be used for frames(parent)
    //await frame?.fill("name", "jayakrishna");
    if(frame != null){
       await frame.fill("input[name='fname']","jayakrishna");
       await frame.fill("input[placeholder='Enter email']","Th");
       //testing a innerframe with the parent
    const frames = frame.childFrames()   //child frame
    console.log("No of inner frames " + frames.length);
    if(frames[0] != null){
    await frames[0].fill("input[name='email']", "jayakrishna@gmail.com");}
    else{
        console.log("No frames");
    }
    await frame.fill("input[placeholder='Enter email']","xpath");
    //frames[0].fill("#email", "jayakrishna@gmail.com")
    }else{ throw new Error("No frames found");}
})
})