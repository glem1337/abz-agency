import {usersApi} from "../../api/api";

import {
    setUsersLoading,
    setUsersError,
    setUsers,
    setNextUrl,
} from './UsersActions';

const getUsers = (nextUrl) => async dispatch => {
    dispatch(setUsersLoading());
    try {
        const data = await usersApi.getUsers(nextUrl);
        dispatch(setNextUrl(data.links.next_url));
        dispatch(setUsers(data.users));
    } catch (error) {
        console.log('Error: ', error);
        dispatch(setUsersError(error.message));
    }
};

export default {getUsers};
