import { APIRequestContext } from "@playwright/test";
import { ApiClient } from "../client/ApiClient";
import { API } from "../endPoints";
import { EmployeeResponse } from "../models/EmployeeResponse";
import { Employee } from "../models/EmployeeResponse";
export class EmployeeApi extends ApiClient {

    constructor(request: APIRequestContext) {
        super(request);
    }

    async getEmployees(): Promise<EmployeeResponse> {

        const response = await this.get(API.PIM.EMPLOYEES);

        return await this.parseResponse<EmployeeResponse>(response);

    }

    async findEmployeeByName(
        firstName: string,
        middleName: string,
        lastName: string
    ): Promise<Employee | undefined> {

        const employees = await this.getEmployees();

        return employees.data.find(employee =>
            employee.firstName === firstName &&
            employee.middleName === middleName &&
            employee.lastName === lastName
        );

    }

    async deleteEmployee(empNumber: number): Promise<void> {

        console.log(`Deleting employee ${empNumber}`);

        const response = await this.delete(
            API.PIM.EMPLOYEES,
            {
                ids: [empNumber]
            }
        );

        await this.parseResponse(response);

        console.log("Employee deleted successfully.");

    }

}