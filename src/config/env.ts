import dotenv from 'dotenv';

dotenv.config({ override: true });

const requiredVars = [
    'BASE_URL',

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
    application: process.env.APPLICATION_NAME!,
    environment: process.env.TEST_ENVIRONMENT!,
    browser: process.env.BROWSER!,
    baseUrl: process.env.BASE_URL!,
    username: process.env.USERNAME!,
    password: process.env.PASSWORD!,
    tester: process.env.TESTER!,
    authStatePath: process.env.AUTH_STATE_PATH!,
    defaultTimeout: Number(process.env.DEFAULT_TIMEOUT) || 30000,
};