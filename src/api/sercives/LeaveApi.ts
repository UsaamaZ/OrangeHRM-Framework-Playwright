import { APIRequestContext } from "@playwright/test";
import { ApiClient } from "../client/ApiClient";
import { LeaveListResponse } from "../models/LeaveListResponse";
import { API } from "../endPoints";

export class LeaveApi extends ApiClient {

    constructor(request: APIRequestContext) {
        super(request);
    }

    async getLeaveRequests(): Promise<LeaveListResponse> {

        const response = await this.get(

            API.LEAVE.LEAVE_REQUESTS

        );

        return await this.parseResponse<LeaveListResponse>(response);

    }

}