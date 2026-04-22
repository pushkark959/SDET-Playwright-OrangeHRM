import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pageObject/LoginPage';
import { DashboardPage } from '../pageObject/DashboardPage';
import { UserPage } from '../pageObject/UserPage';
import { LeftNavigationPage } from '../pageObject/LeftNavigationPage';
import { PIMPage } from '../pageObject/PIMPage';


type PomFixtureType = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    userPage: UserPage;
    leftNavigationPage: LeftNavigationPage;
    pimPage: PIMPage;
}

export const test = baseTest.extend<PomFixtureType>({


    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
    userPage: async ({ page }, use) => {
        await use(new UserPage(page));
    },
    leftNavigationPage: async ({ page }, use) => {
        await use(new LeftNavigationPage(page));
    },
    pimPage: async ({ page }, use) => {
        await use(new PIMPage(page));
    },
})