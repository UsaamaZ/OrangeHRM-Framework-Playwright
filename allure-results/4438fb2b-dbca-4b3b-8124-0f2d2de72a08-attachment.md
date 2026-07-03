# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo\FailReporting.spec.ts >> Dashboard - Verify logged in state
- Location: tests\demo\FailReporting.spec.ts:5:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /Google/
Received string:  "OrangeHRM"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × unexpected value "OrangeHRM"

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Dashboard" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - button ""
- text: 
- paragraph: Time at Work
- separator
- img "profile picture"
- paragraph: Punched Out
- paragraph: "Punched Out: Mar 29th at 01:19 PM (GMT 7)"
- text: 0h 0m Today
- button ""
- separator
- paragraph: This Week
- paragraph: Jun 29 - Jul 05
- text: 
- paragraph: 0h 0m
- text: 
- paragraph: My Actions
- separator
- button
- paragraph: (1) Pending Self Review
- button
- paragraph: (1) Candidate to Interview
- text: 
- paragraph: Quick Launch
- separator
- button "Assign Leave"
- paragraph: Assign Leave
- button "Leave List"
- paragraph: Leave List
- button "Timesheets"
- paragraph: Timesheets
- button "Apply Leave"
- paragraph: Apply Leave
- button "My Leave"
- paragraph: My Leave
- button "My Timesheet"
- paragraph: My Timesheet
- text: 
- paragraph: Buzz Latest Posts
- separator
- img "profile picture"
- paragraph: manda akhil user
- paragraph: 2020-08-10 08:38 AM
- separator
- paragraph: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
- img "profile picture"
- paragraph: Sania Shaheen
- paragraph: 2020-08-10 08:38 AM
- separator
- paragraph: "World Championship: What makes the perfect snooker player? Mark Selby: Robertson has one of the best techniques in the game. It is very, very straight and he fully commits to every single shot he plays. John Higgins: Every shot is repetitive. He always keeps the same technique and cues through the ball bang straight. Barry Hawkins: Robertson is textbook with his grip and has a ramrod solid cue action, delivering it in a straight line. Honourable mentions: Shaun Murphy, Ding Junhui, Jack Lisowski."
- img "profile picture"
- paragraph: Rebecca Harmony
- paragraph: 2020-08-10 08:34 AM
- separator
- paragraph: Throwback Thursdays!!
- img
- img "profile picture"
- paragraph: Russel Hamilton
- paragraph: 2020-08-10 08:33 AM
- separator
- paragraph: Live SIMPLY Dream BIG Be GREATFULL Give LOVE Laugh LOT.......
- paragraph: Employees on Leave Today
- text: 
- separator
- img "No Content"
- paragraph: No Employees are on Leave Today
- text: 
- paragraph: Employee Distribution by Sub Unit
- separator
- list:
  - listitem: Engineering
  - listitem: Human Resources
  - listitem: Administration
  - listitem: Client Services
  - listitem: Unassigned
- text: 
- paragraph: Employee Distribution by Location
- separator
- list:
  - listitem: Texas R&D
  - listitem: New York Sales Office
  - listitem: Unassigned
- paragraph: OrangeHRM OS 5.8
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '../../src/fixture/authFixture';
  2  | import { AllureHelper } from '../../src/utils/allure/allureHelper';
  3  | import { Severity } from "allure-js-commons";
  4  | 
  5  | test('Dashboard - Verify logged in state', async ({ authenticatedPage: page }) => {
  6  | 
  7  |     await AllureHelper.addMetadata(
  8  |         "Dashboard",
  9  |         "Dashboard Verification",
  10 |         "Verify authenticated user can access dashboard",
  11 |         Severity.CRITICAL,
  12 |         "Usama Zaheer Butt",
  13 |         ["Smoke", "Regression", "Priority = High"]
  14 |     );
  15 | 
  16 |     await page.goto('/web/index.php/dashboard/index');
  17 | 
  18 |     await expect(page).toHaveURL(/dashboard/);
  19 | 
  20 |     // delibaretly failed the testts
> 21 |     await expect(page).toHaveTitle(/Google/);
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  22 | 
  23 | });
```