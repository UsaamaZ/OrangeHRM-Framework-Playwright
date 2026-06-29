import fs from "fs";
import path from "path";

export function createExecutorFile() {

    const executor = {
        name: "Local Machine",
        type: "Playwright",
        buildName: "OrangeHRM Automation Framework",
        buildOrder: 1,
        reportName: "OrangeHRM Test Report",
    };

    const filePath = path.join(
        process.cwd(),
        "allure-results",
        "executor.json"
    );

    fs.writeFileSync(
        filePath,
        JSON.stringify(executor, null, 2)
    );

    console.log("Executor file created.");
}