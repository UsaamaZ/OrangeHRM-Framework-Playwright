import { APIRequestContext } from "@playwright/test";
import { ApiClient } from "../client/ApiClient";
import { EmployeeResponse } from "../models/EmployeeResponse";
import { API } from "../endPoints";

export class EmployeeApi extends ApiClient {

    constructor(request: APIRequestContext) {
        super(request);
    }

    async getEmployees(): Promise<EmployeeResponse> {
        const response = await this.get(API.PIM.EMPLOYEES);

        return await this.parseResponse<EmployeeResponse>(response);
    }

}