# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/Employee/AddEmployee.spec.ts >> Employee Management >> Add a new employee
- Location: tests/ui/Employee/AddEmployee.spec.ts:7:9

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList", waiting until "load"

```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | import { EmployeeLocators } from '../Employee/EmployeeLocators'
  3  | import {BasePage} from '../BasePage'
  4  | import { Sidebar } from '../components/Sidebar';
  5  | import { EmployeeData } from './EmployeeData';
  6  | 
  7  | 
  8  | export class EmployeePage extends BasePage {
  9  | 
  10 |     private sidebar: Sidebar;
  11 | 
  12 |     constructor(page: Page) {
  13 |         super(page);
  14 |         this.sidebar = new Sidebar(page);
  15 |     }
  16 | 
  17 |    async navigateToAddEmployee() {
  18 | 
> 19 |     await this.page.goto("/web/index.php/pim/viewEmployeeList");
     |                     ^ Error: page.goto: Target page, context or browser has been closed
  20 | 
  21 |     await this.sidebar.openPIM();
  22 | 
  23 |     await this.page.click(EmployeeLocators.addEmployeeMenu);
  24 | 
  25 | }
  26 | 
  27 |     async enterFirstName(firstName: string) {
  28 | 
  29 |         await this.page.fill(
  30 |             EmployeeLocators.firstName,
  31 |             firstName
  32 |         );
  33 | 
  34 |     }
  35 | 
  36 |     async enterMiddleName(middleName: string) {
  37 | 
  38 |         await this.page.fill(
  39 |             EmployeeLocators.middleName,
  40 |             middleName
  41 |         );
  42 | 
  43 |     }
  44 | 
  45 |     async enterLastName(lastName: string) {
  46 | 
  47 |         await this.page.fill(
  48 |             EmployeeLocators.lastName,
  49 |             lastName
  50 |         );
  51 | 
  52 |     }
  53 | 
  54 |     async clickSave() {
  55 | 
  56 |         await this.page.click(
  57 |             EmployeeLocators.saveButton
  58 |         );
  59 | 
  60 |     }
  61 | 
  62 |     async addEmployee(employee: EmployeeData) {
  63 | 
  64 |         await this.navigateToAddEmployee();
  65 | 
  66 |         await this.enterFirstName(employee.firstName);
  67 | 
  68 |         if (employee.middleName) {
  69 |             await this.enterMiddleName(employee.middleName);
  70 |         }
  71 | 
  72 |         await this.enterLastName(employee.lastName);
  73 | 
  74 |         await this.clickSave();
  75 | 
  76 |     }
  77 | 
  78 | }
```