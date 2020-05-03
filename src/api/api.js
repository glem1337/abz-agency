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

const getUsersPositions = async () => {
    try {
        const response = await axios.get(
            'https://frontend-test-assignment-api.abz.agency/api/v1/positions',
        );
        if (response.data.success) {
            return response.data.positions.map(obj => ({
                value: obj.id,
                label: obj.name,
            }));
        }
    } catch (error) {
        console.log('getUsersPositions api error: ', error);
    }
};

const getToken = async () => {
    try {
        const response = await axios.get(
            'https://frontend-test-assignment-api.abz.agency/api/v1/token',
        );
        if (response.data.success) {
            return response.data.token;
        }
    } catch (error) {
        console.log('getToken api error: ', error);
    }
};

const addUser = async (name, email, phone, positionId, token) => {
    try {
        const formData = new FormData();
        const fileField = document.querySelector('input[type="file"]');
        formData.append('position_id', +positionId);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('photo', fileField.files[0]);
        const response = await axios({
            method: 'post',
            url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
            data: formData,
            headers: {
                Token: token,
            },
        });
        if (response.data.success) {
            return response.data.message;
        }
    } catch (error) {
        console.log('addUser api error: ', error);
        return error.message;
    }
};

export default {getUsersPositions, getToken, addUser};
