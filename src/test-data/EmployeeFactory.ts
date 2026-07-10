import { EmployeeData } from "../pages/Employee/EmployeeData";

export class EmployeeFactory {

    static create(): EmployeeData {
const random = Date.now();

const firstName = `John${random}`;
const middleName = "QA";
const lastName = "Automation";

return {
    firstName,
    middleName,
    lastName,
    fullName: `${firstName} ${middleName} ${lastName}`
};
    }

}

