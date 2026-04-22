import { chromium, expect, type FullConfig } from '@playwright/test';
import { LoginPage } from '../pageObject/LoginPage';
import { DashboardPage } from '../pageObject/DashboardPage';

async function globalSetup(_config: FullConfig) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.gotoOrangeHRM();
  await loginPage.LoginOrangeHRM('Admin', 'admin123');
  await page.waitForURL(`${process.env.BASE_URL}web/index.php/dashboard/index`);
  await expect(dashboardPage.dashboardTitleText).toHaveText('Dashboard');
  await context.storageState({ path: 'auth/./auth.json' });

  await browser.close();
}

export default globalSetup;
