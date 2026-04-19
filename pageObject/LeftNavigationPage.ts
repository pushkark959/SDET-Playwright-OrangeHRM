import { Locator, Page } from "@playwright/test";


export class LeftNavigationPage {
    readonly page:Page;
    readonly pmilink:Locator;

    constructor(page:Page){
        this.page=page;
        this.pmilink = page.getByRole('link', { name: 'PIM' });
    }

    async clickPmiLink(){
        await this.pmilink.click();
    } 
}