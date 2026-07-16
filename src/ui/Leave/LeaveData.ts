export interface LeaveRequest {

    employeeName: string;

    leaveType: string;

    fromDate: string;

    toDate: string;

    comment?: string;
}