import fs from "fs";
import path from "path";

export function createCategoriesFile() {

    const source = path.join(
        process.cwd(),
        "categories.json"
    );

    const destination = path.join(
        process.cwd(),
        "allure-results",
        "categories.json"
    );

    fs.copyFileSync(source, destination);

    console.log("Categories file created.");
}