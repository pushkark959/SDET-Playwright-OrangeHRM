import { Locator, Page } from "@playwright/test";
import { text } from "stream/consumers";

export class LoginPage {
    readonly page:Page;
    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
    readonly invalidCrdentialErrorPopup:Locator;

constructor(page:Page){
    this.page=page;
    this.usernameInput=page.getByRole('textbox', { name: 'Username' });
    this.passwordInput=page.getByRole('textbox', { name: 'Password' });
    this.loginButton=page.getByRole('button', { name: 'Login' });
    //this.invalidCrdentialErrorPopup = page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']");
    this.invalidCrdentialErrorPopup = page.getByRole('alert');
}

   async gotoOrangeHRM(){
        await this.page.goto(`${process.env.BASE_URL}web/index.php/auth/login`);
       // await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    


 async LoginOrangeHRM(username:string, password:string){
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

    
 }  

}

