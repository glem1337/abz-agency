import * as axios from 'axios';


export class usersApi {

    static async getUsers(nextUrl) {
        try {
            const response = await axios.get(nextUrl);
            if (response.data.success) {
                return response.data;
            }
        } catch (error) {
            console.log('getUserList api errors: ', error);
        }
    }

    static async getUsersPositions() {
        try {
            const response = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions');
            if (response.data.success) {
                return response.data.positions.map(obj => ({
                    value: obj.id,
                    label: obj.name,
                }));
            }
        } catch (error) {
            console.log('getUsersPositions api error: ', error);
        }
    }

};