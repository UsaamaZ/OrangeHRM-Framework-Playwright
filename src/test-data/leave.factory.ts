import { LeaveRequest } from "../../pages/Leave/LeaveData";

export class LeaveFactory {

    static create(): LeaveRequest {

        const now = new Date();
        const dd = String(now.getDate()).padStart(2, '0');
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const yyyy = now.getFullYear();

        const fromDate = `${yyyy}-${mm}-${dd}`;
        const toDate = `${yyyy}-${mm}-${dd}`;

        return {
            employeeName: `John Automation ${Date.now()}`,
            leaveType: 'Vacation',
            fromDate: fromDate,
            toDate: toDate,
            comment: 'Auto generated leave request for tests'
        };
    }

}
