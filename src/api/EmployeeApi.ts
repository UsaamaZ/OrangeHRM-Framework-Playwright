import { BaseApi } from '../../raw/BaseApi';

export class EmployeeAPI extends BaseApi {
    async getEmployees() {

        return await this.request.get('/api/v1/Lookup/EmployeeLookup', {
            headers: this.getHeaders()
        });
    }
}