import { APIRequestContext } from "@playwright/test";
import { ApiClient } from "../client/ApiClient";
import { API } from "../endPoints";

export class LeaveApi extends ApiClient {

    constructor(request: APIRequestContext) {
        super(request);
    }

    async getLeaveRequests(): Promise<any> {

        const response = await this.get(API.LEAVE.LEAVE_REQUESTS);

        return await this.parseResponse<any>(response);

    }

    async createLeaveRequest(body: unknown): Promise<any> {

        const response = await this.post(API.LEAVE.LEAVE_REQUESTS, body);

        return await this.parseResponse<any>(response);

    }

}