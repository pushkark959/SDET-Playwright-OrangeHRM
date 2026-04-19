//import test, { expect } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config({ path: './env-files/.env.demo' });
import { test} from "../fixtures/pom-fixture";
import { expect } from "@playwright/test";
import { DashboardPage } from "../pageObject/DashboardPage";

test ('Global Setup for auto login', async ({ page, dashboardPage, loginPage, }) => {
await loginPage.gotoOrangeHRM();
await loginPage.LoginOrangeHRM('Admin', 'admin123');
await page.waitForURL(process.env.BASE_URL + 'web/index.php/dashboard/index');
await expect(dashboardPage.dashboardTitleText).toHaveText('Dashboard');           
await page.context().storageState({ path: 'auth/./auth.json' });                  
})