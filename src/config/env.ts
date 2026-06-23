import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
    baseUrl: process.env.BASE_URL!,
    username: process.env.USERNAME!,
    password: process.env.PASSWORD!,
    authStatePath: process.env.AUTH_STATE_PATH!,
    apiBaseUrl: process.env.API_BASE_URL!,
    defaultTimeout: Number(process.env.DEFAULT_TIMEOUT)
};