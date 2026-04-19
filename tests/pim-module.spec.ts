import test, { expect } from "@playwright/test";



test('Verify new employee can be added successfully', async ({ LeftNavigationPage, pimPage }) => {
    await LeftNavigationPage.clickPmiLink();
   // await pimPage.clickAddEmployeeButton();
    await pimPage.addEmployee(pimPage.firstName, pimPage.middleName, pimPage.lastName);
    //await expect(pimPage.newEmployeeNameHeading).toHaveText(pimPage.newEmployeeNameHeading);
    await expect(pimPage.newEmployeeNameHeading).toHaveText(`${pimPage.firstName} ${pimPage.lastName  }`);                                                                          
})