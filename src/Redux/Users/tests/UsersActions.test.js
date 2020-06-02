import types from '../UsersActionTypes';
import {setUsersLoading, setUsersError, setNextUrl, setUsers, resetUsersData} from '../UsersActions';



describe('Test action creators `UsersActions`', () => {

    it('should create an action to set loader', function () {
        const expectedAction = {
            type: types.SET_USERS_LOADING,
        };
        expect(setUsersLoading()).toEqual(expectedAction);
    });

    it('should create an action to set error', function () {
        const error = 'Some error';
        const expectedAction = {
            type: types.SET_USERS_ERROR,
            payload: {
                error,
            },
        };
        expect(setUsersError(error)).toEqual(expectedAction);
    });

    it('should create an action to set next url', function () {
        const nextUrl = 'https://site.com';
        const expectedAction = {
            type: types.SET_NEXT_URL,
            payload: {
                nextUrl,
            },
        };
        expect(setNextUrl(nextUrl)).toEqual(expectedAction);
    });

    it('should create an action to set users', function () {
        const usersList = [{},{}];
        const expectedAction = {
            type: types.SET_USERS,
            payload: {
                usersList,
            },
        };
        expect(setUsers(usersList)).toEqual(expectedAction);
    });

    it('should create an action to reset state', function () {
        const expectedAction = {
            type: types.RESET_USERS_DATA,
        };
        expect(resetUsersData()).toEqual(expectedAction);
    });

});