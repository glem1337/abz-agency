import React from 'react';
import {shallow} from 'enzyme'
import configureStore from 'redux-mock-store'
import {UsersContainer} from "./UsersContainer";
import {Provider} from 'react-redux';

// TODO написать тест при нажатии на Load More и протестировать reducer

describe('Users container', () => {

    const initialState = {
        usersList: [],
        nextUrl: '',
        isFetching: false,
        error: null
    };

    const props = {
        usersList: [],
        nextUrl: '',
        isFetching: false,
        error: null,
        getUsers: () => {}
    };

    describe('Users container dispatch `getUsers()` on click Load More', () => {
        let usersContainer, mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const nextProps = {
                ...props,
                getUsers: mockFunc,
                nextUrl: 'https://site.com',
            };
            usersContainer = shallow(<UsersContainer {...nextProps} />);
        });

        it('renders properly', () => {
            expect(usersContainer).toMatchSnapshot();
        });

        it('dispatches the `getUsers()` method on click', () => {
            usersContainer.find('.users__button').simulate('click');
            expect(mockFunc).toHaveBeenCalledTimes(2);
        });

        afterEach(() => {
            usersContainer.unmount();
            mockFunc = null;
        });

    });


    describe('Users container state', () => {
        const mockStore = configureStore();
        const store = mockStore(initialState);
        const wrapper = shallow(<Provider store={store}><UsersContainer {...props} /></Provider>);
        const usersContainer = wrapper.find('UsersContainer');

        it('renders properly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('initialize Users container with initial state', () => {
            expect(usersContainer.props().usersList).toEqual(initialState.usersList);
            expect(usersContainer.props().nextUrl).toEqual(initialState.nextUrl);
            expect(usersContainer.props().isFetching).toEqual(initialState.isFetching);
            expect(usersContainer.props().error).toEqual(initialState.error);
        });

    });

    describe('Users container initial', () => {
        const mockFunc = jest.fn();
        const nextProps = {
            ...props,
            getUsers: mockFunc,
        };
        const usersContainer = shallow(<UsersContainer {...nextProps} />);

        it('renders properly', () => {
            expect(usersContainer).toMatchSnapshot();
        });

        it('dispatches the `getUsers()` method in `componentDidMount()`', () => {
            expect(mockFunc).toHaveBeenCalledTimes(1);
        });

    });

    describe('Users container isFetching', () => {
        const nextProps = {
            ...props,
            isFetching: true,
        };

        const usersContainer = shallow(<UsersContainer {...nextProps} />)

        it('renders preloader', () => {
            expect(usersContainer.find('Loading')).toHaveLength(1);
        });

        it('renders properly', () => {
            expect(usersContainer).toMatchSnapshot();
        });

    });

    describe('Users container with UsersList', () => {
        const nextProps = {
            ...props,
            usersList: [{id: 0, name: 'John Doe'}],
        };

        const usersContainer = shallow(<UsersContainer {...nextProps} />)

        it('UsersList is rendered', () => {
            expect(usersContainer.find('UsersList')).toHaveLength(1);
        });

        it('renders properly', () => {
            expect(usersContainer).toMatchSnapshot();
        });

    });

    describe('Users container with next url', () => {
        let usersContainer;
        const nextProps = {
            ...props,
            nextUrl: 'https://site.com',
        };

        beforeEach(() => {
            usersContainer = shallow(<UsersContainer {...nextProps} />);
        });

        it('renders properly', () => {
            expect(usersContainer).toMatchSnapshot();
        });

        it('button Load More renders', () => {
            expect(usersContainer.find('.users__button')).toHaveLength(1);
        });

        afterEach(() => {
            usersContainer.unmount();
        });

    });

    describe('Users container with Error message', () => {
        const nextProps = {
            ...props,
            error: 'Some error',
        };

        const usersContainer = shallow(<UsersContainer {...nextProps} />)

        it('renders properly', () => {
            expect(usersContainer).toMatchSnapshot();
        });

        it('error renders', () => {
            expect(usersContainer.find('.users__error')).toHaveLength(1);
        });

    });

});