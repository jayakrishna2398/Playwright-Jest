import { Page } from "../node_modules/playwright";

export default class Login{
    private page:Page
    constructor(page:Page){
        this.page = page;
    }

    public get emailTextField(){
        const emailTextField = this.page.$("input[name='identifier']")
        if(emailTextField != null){
            return emailTextField;
            
        }
    }
        public async enterEmailId(name: string){
            const ele = await this.emailTextField;
            await ele?.fill(name)
        }
    }
    