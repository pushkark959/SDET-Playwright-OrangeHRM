import { Locator, Page } from '@playwright/test';

export class PIMPage {
  readonly page: Page;
  readonly addEmployeeButton: Locator;
  readonly firstNameInput: Locator;
  readonly middleNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly saveButton: Locator;
  readonly newEmployeeNameHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addEmployeeButton = page.getByRole('link', { name: 'Add Employee' });
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.middleNameInput = page.getByRole('textbox', { name: 'Middle Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.newEmployeeNameHeading = page.getByRole('heading', { name: 'Employee Information' });
  }

  async addEmployee(firstName: string, middleName: string, lastName: string) {
    await this.addEmployeeButton.click();
    await this.firstNameInput.fill(firstName);
    await this.middleNameInput.fill(middleName);
    await this.lastNameInput.fill(lastName);
    await this.saveButton.click();
  }
}
