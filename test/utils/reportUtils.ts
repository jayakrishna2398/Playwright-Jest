declare const reporter: any;
export default class ReportUtils{
    public static async screenshot(description?: string){
        const screenshotBuffer = await page.screenshot();
        if(description != undefined){
            description;
        }else "screenshot";
        await reporter.addAttachment(description, screenshotBuffer, "image/png");
    }
}