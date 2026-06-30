import {APIRequestContext, APIResponse, expect} from "@playwright/test";

export class ApiClient {

    constructor(
        protected readonly request: APIRequestContext
    ) { }

    protected async get(endpoint: string): Promise<APIResponse> {

        return await this.request.get(endpoint);

    }

    protected async post(endpoint: string, body?: unknown): Promise<APIResponse> {

        return await this.request.post(endpoint, { data: body });

    }

    protected async parseResponse<T>(response: APIResponse): Promise<T> {

        console.log("Status:", response.status());
        console.log("URL:", response.url());
        console.log("Body:");
        console.log(await response.text());

        expect(response.ok()).toBeTruthy();

        return await response.json() as T;
    }

}