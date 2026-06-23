import { APIRequestContext } from '@playwright/test';
import { TokenManager } from '../../utils/TokenManager';

export class AuthApi {
    constructor(private request: APIRequestContext) { }

    async login() {
        const response = await this.request.post('/api/v1/auth/LoginAWS', {
            data: {
                username: process.env.ADMIN_USERNAME,
                password: process.env.ADMIN_PASSWORD
            }
        });
        
        const body = await response.json();

        TokenManager.setTokens(body.accessToken, body.refreshToken);

        return body;
    }
}