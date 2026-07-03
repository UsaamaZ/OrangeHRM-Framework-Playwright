const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const reportHistory = path.join(process.cwd(), "allure-report", "history");
const resultsHistory = path.join(process.cwd(), "allure-results", "history");

// Copy history if it exists
if (fs.existsSync(reportHistory)) {
    fs.cpSync(reportHistory, resultsHistory, {
        recursive: true,
        force: true
    });

    console.log("History copied.");
} else {
    console.log("No previous history found.");
}

// Generate report
execSync(
    "allure generate allure-results --clean -o allure-report",
    { stdio: "inherit" }
);