import { Page, expect } from '@playwright/test';
import { EmployeeLocators } from './employee.locators'
import {BasePage} from '../BasePage'
import { Sidebar } from '../components/Sidebar';
import { EmployeeData } from './employee.data';


export class EmployeePage extends BasePage {

    private sidebar: Sidebar;

    constructor(page: Page) {
        super(page);
        this.sidebar = new Sidebar(page);
    }

   async navigateToAddEmployee() {

    await this.page.goto("/web/index.php/pim/viewEmployeeList");

    await this.sidebar.openPIM();

    await this.page.click(EmployeeLocators.addEmployeeMenu);

}

    async enterFirstName(firstName: string) {

        await this.page.fill(
            EmployeeLocators.firstName,
            firstName
        );

    }

    async enterMiddleName(middleName: string) {

        await this.page.fill(
            EmployeeLocators.middleName,
            middleName
        );

    }

    async enterLastName(lastName: string) {

        await this.page.fill(
            EmployeeLocators.lastName,
            lastName
        );

    }

    async clickSave() {

        await this.page.click(
            EmployeeLocators.saveButton
        );

    }

    async addEmployee(employee: EmployeeData) {

        console.log("1. Navigate");
        await this.navigateToAddEmployee();

        console.log("2. First Name");
        await this.enterFirstName(employee.firstName);

        if (employee.middleName) {
         console.log("3. Middle Name");
         await this.enterMiddleName(employee.middleName);
     }

        console.log("4. Last Name");
        await this.enterLastName(employee.lastName);

        console.log("5. Click Save");
        await this.clickSave();

        console.log("6. Employee Saved");
    }

//navigate
    async openEmployeeList() {

    await this.sidebar.openPIM();

    await this.page.click(
        EmployeeLocators.employeeListMenu
    );

}


//search
async searchEmployee(employeeName: string) {

    await this.page
        .locator(EmployeeLocators.employeeNameSearch).first()
        .fill(employeeName);

    await this.page
        .locator(EmployeeLocators.searchButton)
        .click();

}

async verifyEmployeeExists(employeeName: string) {

    await expect(
        this.page.locator(EmployeeLocators.employeeTable)
    ).toContainText(employeeName);

}
}