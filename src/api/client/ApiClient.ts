import { APIRequestContext, APIResponse, expect } from "@playwright/test";

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

        expect(response.ok(), `API request failed.Status: ${response.status()}URL: ${response.url()}
        Response:${await response.text()}`).toBeTruthy();

        return await response.json() as T;
    }

}