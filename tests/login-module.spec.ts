import process from 'process';
import LoginModuleData from '../data/login-module-data.json';
import { test } from '../fixtures/pom-fixture';
import { expect } from '@playwright/test';

test.use({    storageState:{
        cookies: [],
        origins: []
    }})

test ('verify user can not login with invalid password',{
    tag: ['@UI', '@sanity', '@regression'],
    annotation: {
        type: 'issue',
        description: 'This test is failing because of the bug with id 1234_1 in our bug tracking system'
    }
}, async ({ page, loginPage }) => {
   
    const username = process.env.USERNAME!;
    await loginPage.gotoOrangeHRM();  
    await loginPage.LoginOrangeHRM(username, LoginModuleData.wrong_password );
    await expect(loginPage.invalidCrdentialErrorPopup).toHaveText(LoginModuleData.invalid_credentials_text);
    await expect(loginPage.usernameInput).toBeVisible();
});

test ('verify user can not login with invalid username',{
    tag: ['@UI', '@regression'],
    annotation: {
        type: 'issue',
        description: 'This test is failing because of the bug with id 12341_2 in our bug tracking system'
    }
} ,async ({ page, loginPage }) => {
    
    const password = process.env.PASSWORD!;
   await loginPage.gotoOrangeHRM();
   await loginPage.LoginOrangeHRM(LoginModuleData.wrong_username, password);
   await expect(loginPage.invalidCrdentialErrorPopup).toHaveText(LoginModuleData.invalid_credentials_text);
   await expect(loginPage.usernameInput).toBeVisible();
});

test ('verify user can not login with invalid username and password',{
     tag: ['@UI', '@sanity'],
        annotation: {
            type: 'issue',
            description: 'This test is failing because of the bug with id 1234_3 in our bug tracking system'
        }
}, async ({ page, loginPage }) => {
   
   await loginPage.gotoOrangeHRM();
   await loginPage.LoginOrangeHRM(LoginModuleData.wrong_username, LoginModuleData.wrong_password);
   await expect(loginPage.invalidCrdentialErrorPopup).toHaveText(LoginModuleData.invalid_credentials_text);
   await expect(loginPage.usernameInput).toBeVisible();
});

test('verify user can login with valid credentials', async ({ page, loginPage }) => {
    const username = process.env.USERNAME!;
    const password = process.env.PASSWORD!; 
    await loginPage.gotoOrangeHRM();
    await loginPage.LoginOrangeHRM(username, password);
    //await expect(page).toHaveURL(/.*dashboard.*/);
});