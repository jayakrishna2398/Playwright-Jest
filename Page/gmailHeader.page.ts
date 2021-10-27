import { Page } from "../node_modules/playwright";

export default class HeaderGmail{
    private page:Page
    constructor(page:Page){
        this.page = page;
    }

    public get logInBtn(){
        const logInBtn = this.page.$("//button[text()='Sign in']")
        if(logInBtn != null){
            return logInBtn;
            
        }
    }
    public async logIn(){
        const ele = await this.logInBtn;
        await ele?.click();
    }
    }