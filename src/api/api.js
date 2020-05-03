import * as axios from 'axios';


export class usersApi {

    static getUsers(nextUrl) {
        return axios.get(nextUrl).then(response => {
            if (response.data.success) {
                return response.data;
            }
        });
    }

}