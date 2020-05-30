import React from 'react';
import {shallow} from 'enzyme'
import {UsersContainer} from "./UsersContainer";


describe('Users container', () => {

    const props = {
        usersList: [],
        nextUrl: '',
        isFetching: false,
        error: null,
        getUsers: () => {
        }
    };

    describe('Users container initial', () => {
        const usersContainer = shallow(<UsersContainer {...props} />);

        it('not UsersList render', () => {
            expect(usersContainer.find('UsersList')).toHaveLength(0);
        });

        it('not button render', () => {
            expect(usersContainer.find('.users__button')).toHaveLength(0);
        });

        it('not error render', () => {
            expect(usersContainer.find('.users__error')).toHaveLength(0);
        });

        it('not preloader render', () => {
            expect(usersContainer.find('Loading')).toHaveLength(0);
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

        it('not error render', () => {
            expect(usersContainer.find('.users__error')).toHaveLength(0);
        });

        it('not button render', () => {
            expect(usersContainer.find('.users__button')).toHaveLength(0);
        });

        it('not UsersList render', () => {
            expect(usersContainer.find('UsersList')).toHaveLength(0);
        });
    });

});