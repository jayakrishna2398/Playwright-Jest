import { Browser,BrowserContext,chromium,Page } from "../../node_modules/playwright";

describe("drag and drop", () =>{
    let browser: Browser
    let context: BrowserContext
    let page: Page

    beforeAll(async() =>{
        browser = await chromium.launch({
            headless: false
        })
        context = await browser.newContext();
        page = await context.newPage();
    
    })
    test("testing drag and drop feature", async() =>{
        await page.goto("https://letcode.in/dropable")
        const source = await page.$("#draggable");   //source = drag
        const target = await page.$("#droppable");   //target = drop
        if(source && target) {
            const sourceBound = await source.boundingBox();
            const targetBound = await target.boundingBox();
            if(sourceBound && targetBound){
                await page.mouse.move(sourceBound.x + sourceBound.width/2, sourceBound.y + sourceBound.height/2)
                await page.mouse.down();
                await page.mouse.move(targetBound.x + targetBound.width/2, targetBound.y + targetBound.height/2)
                await page.mouse.down();
            }else{
                throw new Error("No element");
                
            }
        }
    })
    test("testing drag and drop feature using frames", async() =>{     //using drag and drop within frames
        await page.goto("https://jqueryui.com/droppable/")
        const frame = page.frame({url: "https://jqueryui.com/resources/demos/droppable/default.html"})
        if(frame){
        const source = await frame.$("#draggable");   //source = drag
        const target = await frame.$("#droppable");   //target = drop
        if(source && target) {
            const sourceBound = await source.boundingBox();
            const targetBound = await target.boundingBox();
            if(sourceBound && targetBound){
                await page.mouse.move(sourceBound.x + sourceBound.width/2, sourceBound.y + sourceBound.height/2)
                await page.mouse.down();
                await page.mouse.move(targetBound.x + targetBound.width/2, targetBound.y + targetBound.height/2)
                await page.mouse.down();
            }else{
                throw new Error("No element");
                
            }
        }
    }
    })
})

//Note: 
//we cant bring a frame to mouse function since its not available...
//so since frame is within the frame, we should use the mouse function with page itself.