import fs from "fs";
import path from "path";
import { ensureAllureResultsFolder } from "../allureFoldersPresence";

export function createExecutorFile() {

    const resultsDir = ensureAllureResultsFolder();

    const executor = {
        name: "Local Machine",
        type: "Playwright",
        buildName: "OrangeHRM Automation Framework",
        buildOrder: 1,
        reportName: "OrangeHRM Test Report",
    };

    const filePath = path.join(resultsDir, "executor.json");

    fs.writeFileSync(
        filePath,
        JSON.stringify(executor, null, 2)
    );

    console.log("Executor file created.");
}