export interface EmployeeResponse {

    data: Employee[];

    meta: {
        total: number;
    };

}

export interface Employee {

    empNumber: number;

    firstName: string;

    middleName: string;

    lastName: string;

    employeeId: string;

}