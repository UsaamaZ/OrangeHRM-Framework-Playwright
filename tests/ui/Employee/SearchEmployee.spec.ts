import { test } from "../../../src/fixture/authFixture";
import { EmployeeFactory } from "../../../src/test-data/employee.factory";
import { EmployeePage } from "../../../src/pages/Employee/employee.page";

test.describe("Employee Search", () => {

    test("Search existing employee", async ({ authenticatedPage }) => {

        const employeePage = new EmployeePage(authenticatedPage);

        const employee = EmployeeFactory.create();

        // Create Employee

        await employeePage.addEmployee(employee);

        // Search Employee

        await employeePage.openEmployeeList();

        await employeePage.searchEmployee(employee.firstName);

        await employeePage.verifyEmployeeExists(employee.firstName);

    });

});