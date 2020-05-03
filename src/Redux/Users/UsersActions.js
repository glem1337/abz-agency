import types from './UsersActionTypes';

export const setUsersLoading = () => ({
    type: types.SET_USERS_LOADING,
});

export const setUsersError = error => ({
    type: types.SET_USERS_ERROR,
    payload: {
        error,
    },
});

export const setNextUrl = nextUrl => ({
    type: types.SET_NEXT_URL,
    payload: {
        nextUrl
    }
});

export const setUsers = usersList => ({
    type: types.SET_USERS,
    payload: {
        usersList,
    },
});
