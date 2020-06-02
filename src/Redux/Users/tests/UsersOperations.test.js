import UsersOperations from '../UsersOperations';
import types from '../UsersActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


const mockGetUsers = {
    success: true,
    links: {
        next_url: 'https://site.com',
    },
    users: [{}, {}],
};


describe('Test async actions UsersOperations', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('creates SET_NEXT_URL and SET_USERS when fetching users has been done', () => {

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: mockGetUsers,
            });
        });

        const store = mockStore({
            usersList: [],
            nextUrl: '',
        });

        const expectedActions = [
            {type: types.SET_USERS_LOADING},
            {type: types.SET_NEXT_URL, payload: {nextUrl: mockGetUsers.links.next_url}},
            {type: types.SET_USERS, payload: {usersList: mockGetUsers.users}}
        ];

        return store.dispatch(UsersOperations.getUsers()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    });


});