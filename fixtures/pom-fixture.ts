import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pageObject/LoginPage';
import { DashboardPage } from '../pageObject/DashboardPage';


type PomFixtureType = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    userPage: UserPage;
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
    }
})