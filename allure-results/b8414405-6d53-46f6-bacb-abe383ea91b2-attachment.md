# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\Logout.spec.ts >> Authentication flow >> logout after login
- Location: tests\ui\Logout.spec.ts:9:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.pressSequentially: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder(/email/i)

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: AdminAuto User
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - button "" [ref=e133] [cursor=pointer]:
            - generic [ref=e134]: 
  - generic [ref=e135]:
    - generic [ref=e137]:
      - generic [ref=e139]:
        - generic [ref=e141]:
          - generic [ref=e142]: 
          - paragraph [ref=e143]: Time at Work
        - separator [ref=e144]
        - generic [ref=e146]:
          - generic [ref=e147]:
            - img "profile picture" [ref=e149]
            - generic [ref=e150]:
              - paragraph [ref=e151]: Punched Out
              - paragraph [ref=e152]: "Punched Out: Mar 29th at 01:19 PM (GMT 7)"
          - generic [ref=e153]:
            - generic [ref=e154]: 0h 0m Today
            - button "" [ref=e155] [cursor=pointer]:
              - generic [ref=e156]: 
          - separator [ref=e157]
          - generic [ref=e158]:
            - generic [ref=e159]:
              - paragraph [ref=e160]: This Week
              - paragraph [ref=e161]: Jun 22 - Jun 28
            - generic [ref=e162]:
              - generic [ref=e163]: 
              - paragraph [ref=e164]: 0h 0m
      - generic [ref=e168]:
        - generic [ref=e170]:
          - generic [ref=e171]: 
          - paragraph [ref=e172]: My Actions
        - separator [ref=e173]
        - generic [ref=e176]:
          - button [ref=e177] [cursor=pointer]
          - paragraph [ref=e183] [cursor=pointer]: (1) Pending Self Review
      - generic [ref=e185]:
        - generic [ref=e187]:
          - generic [ref=e188]: 
          - paragraph [ref=e189]: Quick Launch
        - separator [ref=e190]
        - generic [ref=e192]:
          - generic [ref=e193]:
            - button "Assign Leave" [ref=e194] [cursor=pointer]
            - generic "Assign Leave" [ref=e197]:
              - paragraph [ref=e198]: Assign Leave
          - generic [ref=e199]:
            - button "Leave List" [ref=e200] [cursor=pointer]
            - generic "Leave List" [ref=e207]:
              - paragraph [ref=e208]: Leave List
          - generic [ref=e209]:
            - button "Timesheets" [ref=e210] [cursor=pointer]
            - generic "Timesheets" [ref=e216]:
              - paragraph [ref=e217]: Timesheets
          - generic [ref=e218]:
            - button "Apply Leave" [ref=e219] [cursor=pointer]
            - generic "Apply Leave" [ref=e222]:
              - paragraph [ref=e223]: Apply Leave
          - generic [ref=e224]:
            - button "My Leave" [ref=e225] [cursor=pointer]
            - generic "My Leave" [ref=e230]:
              - paragraph [ref=e231]: My Leave
          - generic [ref=e232]:
            - button "My Timesheet" [ref=e233] [cursor=pointer]
            - generic "My Timesheet" [ref=e236]:
              - paragraph [ref=e237]: My Timesheet
      - generic [ref=e239]:
        - generic [ref=e241]:
          - generic [ref=e242]: 
          - paragraph [ref=e243]: Buzz Latest Posts
        - separator [ref=e244]
        - generic [ref=e246]:
          - generic [ref=e247]:
            - generic [ref=e248] [cursor=pointer]:
              - img "profile picture" [ref=e250]
              - generic [ref=e251]:
                - paragraph [ref=e252]: AdminAuto QA User
                - paragraph [ref=e253]: 2026-23-06 08:23 PM
            - separator [ref=e254]
            - paragraph [ref=e255]: Created a buzz script
          - generic [ref=e256]:
            - generic [ref=e257] [cursor=pointer]:
              - img "profile picture" [ref=e259]
              - generic [ref=e260]:
                - paragraph [ref=e261]: AdminAuto QA User
                - paragraph [ref=e262]: 2026-23-06 08:06 PM
            - separator [ref=e263]
            - paragraph [ref=e264]: Automated post 5e55c7
          - generic [ref=e265]:
            - generic [ref=e266] [cursor=pointer]:
              - img "profile picture" [ref=e268]
              - generic [ref=e269]:
                - paragraph [ref=e270]: AdminAuto QA User
                - paragraph [ref=e271]: 2026-23-06 08:03 PM
            - separator [ref=e272]
            - paragraph [ref=e273]: Hi , Create recording Buzz
          - generic [ref=e274]:
            - generic [ref=e275] [cursor=pointer]:
              - img "profile picture" [ref=e277]
              - generic [ref=e278]:
                - paragraph [ref=e279]: AdminAuto QA User
                - paragraph [ref=e280]: 2026-23-06 07:58 PM
            - separator [ref=e281]
            - paragraph [ref=e282]: Automated post 5027cf
          - generic [ref=e283]:
            - generic [ref=e284] [cursor=pointer]:
              - img "profile picture" [ref=e286]
              - generic [ref=e287]:
                - paragraph [ref=e288]: AdminAuto QA User
                - paragraph [ref=e289]: 2026-23-06 07:57 PM
            - separator [ref=e290]
            - paragraph [ref=e291]: Automated post eb5329
      - generic [ref=e293]:
        - generic [ref=e294]:
          - paragraph [ref=e299]: Employees on Leave Today
          - generic [ref=e300] [cursor=pointer]: 
        - separator [ref=e301]
        - generic [ref=e303]:
          - img "profile picture" [ref=e305]
          - generic [ref=e306]:
            - paragraph [ref=e307]: AdminAuto User
            - paragraph [ref=e308]: US - Vacation (Half Day - Afternoon)
          - paragraph [ref=e309]: muser
      - generic [ref=e311]:
        - generic [ref=e313]:
          - generic [ref=e314]: 
          - paragraph [ref=e315]: Employee Distribution by Sub Unit
        - separator [ref=e316]
        - list [ref=e321]:
          - listitem [ref=e322] [cursor=pointer]:
            - generic "Human Resources" [ref=e324]
          - listitem [ref=e325] [cursor=pointer]:
            - generic "Unassigned" [ref=e327]
      - generic [ref=e329]:
        - generic [ref=e331]:
          - generic [ref=e332]: 
          - paragraph [ref=e333]: Employee Distribution by Location
        - separator [ref=e334]
        - list [ref=e339]:
          - listitem [ref=e340] [cursor=pointer]:
            - generic "Texas R&D" [ref=e342]
          - listitem [ref=e343] [cursor=pointer]:
            - generic "Unassigned" [ref=e345]
    - generic [ref=e346]:
      - paragraph [ref=e347]: OrangeHRM OS 5.8
      - paragraph [ref=e348]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e349] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { Page } from '@playwright/test'
  2  | 
  3  | export class LoginPage {
  4  | 
  5  |     constructor(private page: Page) { }
  6  | 
  7  |     get username() {
  8  |         return this.page.getByPlaceholder(/email/i);
  9  |     }
  10 |     get password() {
  11 |         return this.page.getByPlaceholder(/password/i);
  12 |     }
  13 |     get loginBtn() {
  14 |         return this.page.getByRole('button', { name: /sign in/i });
  15 | 
  16 |     }
  17 |     // get errorMessage() {
  18 |     //     return this.page.locator('.oxd-alert.oxd-alert--error');
  19 | 
  20 |     // }
  21 |     get errorMessage() {
  22 |         return this.page.getByRole('alert', { name: /error/i });
  23 | 
  24 |     }
  25 |     async login(user: string, pass: string) {
  26 | 
> 27 |         await this.username.pressSequentially(user, { delay: 50 });
     |                             ^ Error: locator.pressSequentially: Test timeout of 30000ms exceeded.
  28 |         await this.password.pressSequentially(pass, { delay: 50 });
  29 |         await this.loginBtn.click();
  30 |     }
  31 | }
```