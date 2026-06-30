import { Employee } from "./Employee";

export interface EmployeeResponse {

    data: Employee[];

    meta: {
        total: number;
    };

    rels: unknown[];

}