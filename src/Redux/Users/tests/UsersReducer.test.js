import reducer from '../UsersReducer';
import types from '../UsersActionTypes';

const initialState = {
    usersList: [],
    nextUrl: '',
    isFetching: false,
    error: null
};

describe('Users reducer test', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should be handle SET_NEXT_URL', () => {
        const action = {
            type: types.SET_NEXT_URL,
            payload: {
                nextUrl: 'https://site.com',
            },
        };
        expect(reducer(initialState, action).nextUrl).toEqual('https://site.com');
    });

    it('should be handle SET_USERS', () => {
        const action = {
            type: types.SET_USERS,
            payload: {
                usersList: [{}, {}],
            },
        };
        const expected = {
            ...initialState,
            isFetching: false,
            usersList: [{}, {}],
        };
        expect(reducer(initialState, action)).toEqual(expected);
    });

    it('should be handle SET_USERS_LOADING', () => {
        const action = {
            type: types.SET_USERS_LOADING,
        };
        const expected = {
            ...initialState,
            isFetching: true,
            error: null
        };
        expect(reducer(initialState, action)).toEqual(expected);
    });

    it('should be handle SET_USERS_ERROR', () => {
        const action = {
            type: types.SET_USERS_ERROR,
            payload: {
                error: 'Some error',
            },
        };
        const expected = {
            ...initialState,
            isFetching: false,
            error: 'Error: Some error',
        };
        expect(reducer(initialState, action)).toEqual(expected);
    });

    it('should be handle RESET_USERS_DATA', () => {
        const action = {
            type: types.RESET_USERS_DATA,
        };
        expect(reducer(initialState, action)).toEqual(initialState);
    });


});