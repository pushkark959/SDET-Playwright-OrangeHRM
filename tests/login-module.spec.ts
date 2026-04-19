import LoginModuleData from '../data/login-module-data.json';
import { test } from '../fixtures/pom-fixture';
import { expect } from '@playwright/test';

test.use({    storageState:{
        cookies: [],
        origins: []
    }})

test ('verify user can not login with invalid password', async ({ page, loginPage }) => {
    const username = process.env.USERNAME!;
    await loginPage.gotoOrangeHRM();  
    await loginPage.LoginOrangeHRM(username, LoginModuleData.wrong_password );
    await expect(loginPage.invalidCrdentialErrorPopup).toHaveText(LoginModuleData.invalid_credentials_text);
    await expect(loginPage.usernameInput).toBeVisible();
});

test ('verify user can not login with invalid username', async ({ page, loginPage }) => {
    const password = process.env.PASSWORD!;
   await loginPage.gotoOrangeHRM();
   await loginPage.LoginOrangeHRM(LoginModuleData.wrong_username, password);
   await expect(loginPage.invalidCrdentialErrorPopup).toHaveText(LoginModuleData.invalid_credentials_text);
   await expect(loginPage.usernameInput).toBeVisible();
});

test ('verify user can not login with invalid username and password', async ({ page, loginPage }) => {
   await loginPage.gotoOrangeHRM();
   await loginPage.LoginOrangeHRM(LoginModuleData.wrong_username, LoginModuleData.wrong_password);
   await expect(loginPage.invalidCrdentialErrorPopup).toHaveText(LoginModuleData.invalid_credentials_text);
   await expect(loginPage.usernameInput).toBeVisible();
});