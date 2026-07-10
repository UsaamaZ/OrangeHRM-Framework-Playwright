import { test } from "../../../src/fixture/authFixture";
import { EmployeePage } from "../../../src/pages/Employee/EmployeePage";
import { EmployeeFactory } from "../../../src/test-data/EmployeeFactory";
import  {AllureHelper} from '../../../src/utils/allure/allureHelper';
import { Severity } from "allure-js-commons";

test.describe("Employee Management", () => {

    test("Add a new employee", async ({ authenticatedPage }) => {

          await AllureHelper.addMetadata(
            "Dashboard",
            "Dashboard Verification",
            "Verify add Employee",
            Severity.CRITICAL,
            "Automation Engineer",
            ["Smoke", "Regression"]
          );
        const employeePage = new EmployeePage(authenticatedPage);

        const employee = EmployeeFactory.create();

        await employeePage.addEmployee(employee);

    });

});