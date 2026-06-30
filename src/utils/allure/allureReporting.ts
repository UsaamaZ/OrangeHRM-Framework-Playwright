// import { Page, TestInfo } from "@playwright/test";
// import * as allure from "allure-js-commons";
// export class AllureReporting {
//     private static readonly consoleLogs = new WeakMap<Page, string[]>();
//     static captureConsoleLogs(page: Page): void {
//         const logs: string[] = [];
//         this.consoleLogs.set(page, logs);
//         page.on("console", message => {
//             logs.push(
//                 `[${message.type().toUpperCase()}] ${message.text()}`
//             );
//         });
//     }
//     static getConsoleLogs(page: Page): string[] {
//         return this.consoleLogs.get(page) ?? [];
//     }
//     static async attachConsoleLogs(logs: string[]) {
//         if (!logs.length) return;
//         await allure.attachment(
//             "Browser Console",
//             logs.join("\n"),
//             "text/plain"
//         );
//     }
//     static async attachCurrentUrl(page: Page) {
//         await allure.attachment(
//             "Current URL",
//             page.url(),
//             "text/plain"
//         );
//     }
//     static async attachBrowserInfo(browserName: string) {
//         await allure.attachment(
//             "Browser",
//             browserName,
//             "text/plain"
//         );
//     }
//     static async attachFailureArtifacts(
//         page: Page,
//         testInfo: TestInfo
//     ) {
//         const screenshot = await page.screenshot({
//             fullPage: true,
//             animations: "disabled",
//         });
//         await testInfo.attach("Failure Screenshot", {
//             body: screenshot,
//             contentType: "image/png",
//         });
//         await this.attachCurrentUrl(page);
//         await this.attachBrowserInfo(testInfo.project.name);
//         await this.attachConsoleLogs(
//             this.getConsoleLogs(page)
//         );
//     }
// }