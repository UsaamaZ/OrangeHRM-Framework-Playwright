import { APIRequestContext } from '@playwright/test';
import { TokenManager } from '../utils/TokenManager';

export class BaseApi {
    constructor(protected request: APIRequestContext) { }

    protected getHeaders() {

        return {
            'Authorization': `Bearer ${TokenManager.getAccessToken()}`
        };
    }
}