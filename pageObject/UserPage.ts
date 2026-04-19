import { Locator, Page } from "@playwright/test";

class UserPage {
    readonly page:Page;
    readonly userMenuButton:Locator;
    readonly LogoutButton:Locator | undefined;



    constructor(page:Page){
        this.page=page;
        this.userMenuButton = page.locator('.oxd-userdropdown-name');
        this.LogoutButton = page.getByRole('menuitem', { name: 'Logout' });    
    }  
    async logout(){
        await this.userMenuButton.click();
        await this.LogoutButton?.click();
    }       
}