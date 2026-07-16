export const EmployeeLocators = {

    // Navigation
    addEmployeeMenu: 'a:has-text("Add Employee")',
    employeeListMenu: 'a:has-text("Employee List")',

    // Add Employee
    firstName: 'input[name="firstName"]',
    middleName: 'input[name="middleName"]',
    lastName: 'input[name="lastName"]',
    employeeId: '.oxd-input-group:has(label:text("Employee Id")) input',

    // Search
    employeeNameSearch: 'input[placeholder="Type for hints..."]',

    // Buttons
    saveButton: 'button[type="submit"]',
    searchButton: 'button[type="submit"]',

    // Table
    employeeTable: '.oxd-table-body',
    employeeRow: '.oxd-table-row',

    // Toast
    successToast: '.oxd-toast',

    // Personal Details
    personalDetailsHeading: 'h6.oxd-text.oxd-text--h6.orangehrm-main-title',

    // Empty Result
    noRecordsFound: '.oxd-text--span'

};