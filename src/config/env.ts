import dotenv from 'dotenv';

dotenv.config({ override: true });

const requiredVars = [
    'BASE_URL',
    'API_BASE_URL',
    'USERNAME',
    'PASSWORD',
    'AUTH_STATE_PATH'
];

requiredVars.forEach(variable => {
    if (!process.env[variable]) {
        throw new Error(`Missing required environment variable: ${variable}`);
    }
});

export const ENV = {
    baseUrl: process.env.BASE_URL!,
    apiBaseUrl: process.env.API_BASE_URL!,
    username: process.env.USERNAME!,
    password: process.env.PASSWORD!,
    authStatePath: process.env.AUTH_STATE_PATH!,
    defaultTimeout: Number(process.env.DEFAULT_TIMEOUT) || 30000,
};