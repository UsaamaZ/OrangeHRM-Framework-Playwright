import { test, expect } from '../../src/fixture/authFixture';
import { AllureHelper } from '../../src/utils/allure/allureHelper';
import { Severity } from "allure-js-commons";

test('Dashboard - Verify logged in state', async ({ authenticatedPage: page }) => {

    await AllureHelper.addMetadata(
        "Dashboard",
        "Dashboard Verification",
        "Verify authenticated user can access dashboard",
        Severity.CRITICAL,
        "Usama Zaheer Butt",
        ["Smoke", "Regression"]
    );

    await page.goto('/web/index.php/dashboard/index');

    await expect(page).toHaveURL(/dashboard/);
    await expect(page).toHaveTitle(/OrangeHRM/);

});