export interface LeaveListResponse {

    data: Leave[];

    meta: {

        total: number;

    };

    rels: [];
}

interface Leave {

    id: number;

    date?: string;

    status?: string;

}
