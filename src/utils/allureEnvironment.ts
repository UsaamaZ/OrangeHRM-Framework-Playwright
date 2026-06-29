import fs from "fs";
import path from "path";
import os from "os";
import { ENV } from "../config/env";

export function createEnvironmentFile() {
    const allureResultsPath = path.join(process.cwd(), "allure-results");

    // Create folder if it doesn't exist
    if (!fs.existsSync(allureResultsPath)) {
        fs.mkdirSync(allureResultsPath, { recursive: true });
    }

    const content = `
Application=${ENV.application}
Environment=${ENV.environment}
Browser=${ENV.browser}
Base URL=${ENV.baseUrl}
Operating System=${os.type()} ${os.release()}
Node Version=${process.version}
Tester=${ENV.tester}
`;

    fs.writeFileSync(
        path.join(allureResultsPath, "environment.properties"),
        content.trim()
    );

    console.log("Environment file created.");
}