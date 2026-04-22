import pimDate from '../data/Pim-module-data.json';
import { test } from '../fixtures/pom-fixture';
import { expect } from '@playwright/test';

test(
  'Verify new employee can be added successfully',
  {
    tag: ['@UI', '@sanity', '@regression'],
    annotation: {
      type: 'issue',
      description: 'This test is failing because of bug id 1234_4 in the bug tracking system',
    },
  },
  async ({ leftNavigationPage, pimPage, loginPage }) => {
    await loginPage.gotoOrangeHRM();
    await leftNavigationPage.openPimModule();
    await pimPage.addEmployee(pimDate.first_name, pimDate.middle_name, pimDate.last_name);
    await expect(pimPage.newEmployeeNameHeading).toHaveText(
      `${pimDate.first_name}  ${pimDate.last_name}`
    );
  }
);
