export const API = {

    PIM: {
         EMPLOYEES: "/web/index.php/api/v2/pim/employees",

    CREATE_EMPLOYEE: "/web/index.php/api/v2/pim/employees",

    DELETE_EMPLOYEE: (id:number) =>
        `/web/index.php/api/v2/pim/employees/${id}`
    },

    LEAVE: {

        LEAVE_REQUESTS: `/web/index.php/api/v2/leave/employees/leave-requests`

    }

};