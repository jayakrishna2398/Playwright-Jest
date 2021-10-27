import { Page } from "../node_modules/playwright";

export default class HeaderPage{
    private page: Page;
    constructor(page:Page){
        this.page = page;

    }
    public get eleLoginBtn(){
        const loginBtn = this.page.$("text=Log in");
        if(loginBtn != null){
        return loginBtn;
    }else throw new Error("No element")
    }
    public get eleSignOutBtn(){
        const signOut = this.page.$("text=Sign out");
        if(signOut != null){
        return signOut;
    }else{ throw new Error("No element")}
    }
    public async clickLoginLink(){
        const ele = await this.eleLoginBtn;
        await ele?.click();
    }
    public async clickSignOutLink(){
        const ele = await this.eleSignOutBtn;
        await ele?.click();
    }
}