import {test} from '../fixtures/pom-fixture';
import { expect } from '@playwright/test';

test.beforeEach('Before each Hook', async ({ loginPage }) => {
    await loginPage.gotoOrangeHRM();
    await loginPage.LoginOrangeHRM(process.env.USERNAME!, process.env.PASSWORD!);
});

test.afterEach('After each Hook', async ({ userPage }) => {
    await userPage.logout();
});


test ('Login to OrangeHRM', async ({page, loginPage}) => {

    // console.log('Base URL is: ', process.env.BASE_URL);
    // console.log('Username is: ', process.env.USERNAME);
    // console.log('Password is: ', process.env.PASSWORD); 

    // await loginPage.gotoOrangeHRM();
    // await loginPage.LoginOrangeHRM('Admin', 'admin123');

    await loginPage.gotoOrangeHRM();
    console.log(await page.title());
});

test('Title of the page should be OrangeHRM', {
        tag: ['@UI', '@sanity', '@regression'],
        annotation: {
            type: 'issue',
            description: 'This test is failing because of the bug with id 1234_1 in our bug tracking system'  
        }       
},async ({page, loginPage}) => {
    await loginPage.gotoOrangeHRM();
    // await loginPage.LoginOrangeHRM('Admin', 'admin123');
    // console.log(await page.title());
    expect(page).toHaveTitle('OrangeHRM');
});

test ('url should contain dashboard after login', {
    tag: ['@UI',  '@regression'],
    annotation: {
        type: 'issue',
        description: 'This test is failing because of the bug with id 1234_2 in our bug tracking system'  
    }       
},async ({page, loginPage}) => {
    await loginPage.gotoOrangeHRM();
   // await loginPage.LoginOrangeHRM('Admin', 'admin123');
    await expect(page).toHaveURL(/.*dashboard.*/);
}); 

