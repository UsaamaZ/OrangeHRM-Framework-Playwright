import { APIRequestContext } from "@playwright/test";
import { ApiClient } from "../client/ApiClient";

export class LeaveApi extends ApiClient {

    constructor(request: APIRequestContext) {
        super(request);
    }

}