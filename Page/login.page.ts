import { Page } from "../node_modules/playwright";
export default class LoginPage{

    private page:Page
    constructor(page:Page){
        this.page = page;

    }
    public get eleEmailTextField(){
        const eleEmail = this.page.$("input[name='email']");
        if(eleEmail !=null){
            return eleEmail;
        }else throw new Error("No element");
        }
        public get elePswdTextField(){
            const elePswd = this.page.$("input[name='password']");
            if(elePswd !=null){
                return elePswd;
            }else throw new Error("No element");
            }
            public get eleLoginBtn(){
                const eleBtn = this.page.$("//button[text()='LOGIN']");
                if(eleBtn !=null){
                    return eleBtn;
                }else throw new Error("No element");
            }
            public async enterUserName(name: string){
                const ele = await this.eleEmailTextField;
                await ele?.fill(name);
            }
            public async enterPassword(password: string){
                const ele = await this.elePswdTextField;
                await ele?.fill(password);
            }
            public async clickBtn(){
                const ele = await this.eleLoginBtn;
                await ele?.click();
            }
}