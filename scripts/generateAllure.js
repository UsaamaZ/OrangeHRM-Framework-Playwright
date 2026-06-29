require("ts-node/register");

const { AllureHistory } = require("../src/utils/allure/allureHistory");
const { execSync } = require("child_process");

AllureHistory.prepare();

execSync(
    "allure generate allure-results --clean -o allure-report",
    {
        stdio: "inherit"
    }
);

console.log("Allure report generated.");