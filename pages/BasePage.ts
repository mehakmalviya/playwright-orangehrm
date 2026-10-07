import {Page} from '@playwright/test'

export abstract class BasePage{
    constructor (protected page: Page){
    }
    async goto(path: string){
        await this.page.goto(path);
    }

    async waitForPageLoad(){
        await this.page.waitForLoadState('domcontentloaded')
    }

    async getTitle(){
       return await this.page.title();
    }
    async takeScreenshot(name: string){
        await this.page.screenshot({ path: `screenshots/${name}.png` });
    }

}