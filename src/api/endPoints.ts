export const API = {
    PIM: {

        EMPLOYEES: "/web/index.php/api/v2/pim/employees",
        EMPLOYEE: (id: number) => `/web/index.php/api/v2/pim/employees/${id}/personal-details`
    }
}