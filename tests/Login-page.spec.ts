import process from 'process';
import {test} from '../fixtures/pom-fixture';

test ('Login to OrangeHRM', async ({page, loginPage}) => {

    // console.log('Base URL is: ', process.env.BASE_URL);
    // console.log('Username is: ', process.env.USERNAME);
    // console.log('Password is: ', process.env.PASSWORD); 

    // await loginPage.gotoOrangeHRM();
    // await loginPage.LoginOrangeHRM('Admin', 'admin123');

    await loginPage.gotoOrangeHRM();
    console.log(await page.title());
});