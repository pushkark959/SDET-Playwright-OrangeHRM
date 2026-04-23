import { test } from '../fixtures/pom-fixture';
import { expect } from '@playwright/test';

test.beforeEach('Before each Hook', async ({ loginPage }) => {
  await loginPage.gotoOrangeHRM();
});

// test.afterEach('After each Hook', async ({ userPage }) => {
//   await userPage.logout();
// });

test('Login to OrangeHRM', async ({ loginPage, page }) => {
   await loginPage.gotoOrangeHRM();
  console.log(await page.title());
});

test(
  'Title of the page should be OrangeHRM',
  {
    tag: ['@UI', '@sanity', '@regression'],
    annotation: {
      type: 'issue',
      description: 'This test is failing because of bug id 1234_1 in the bug tracking system',
    },
  },
  async ({ page }) => {
    await expect(page).toHaveTitle('OrangeHRM');
  }
);

test(
  'url should contain dashboard after login',
  {
    tag: ['@UI', '@regression'],
    annotation: {
      type: 'issue',
      description: 'This test is failing because of bug id 1234_2 in the bug tracking system',
    },
  },
  async ({ page }) => {
   
    await expect(page).toHaveURL(/.*dashboard.*/);
  }
);

