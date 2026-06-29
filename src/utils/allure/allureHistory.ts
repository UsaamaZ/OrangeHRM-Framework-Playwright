import fs from "fs";
import path from "path";

export class AllureHistory {

    private static readonly reportHistory = path.resolve(
        "allure-report",
        "history"
    );

    private static readonly resultsHistory = path.resolve(
        "allure-results",
        "history"
    );

    static prepare(): void {

        if (!fs.existsSync(this.reportHistory)) {
            console.log("No previous history found.");
            return;
        }

        fs.rmSync(this.resultsHistory, {
            recursive: true,
            force: true
        });

        fs.cpSync(
            this.reportHistory,
            this.resultsHistory,
            {
                recursive: true
            }
        );

        console.log("Previous Allure history copied.");
    }
}