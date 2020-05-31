import React from 'react';
import {shallow} from 'enzyme'
import UsersList from "./UsersList";


describe('Users List', () => {

    const props = {
        usersList: [
            {id: 0},
            {id: 1},
        ],
    };

    const usersList = shallow(<UsersList {...props} />)

    it('renders properly', () => {
        expect(usersList).toMatchSnapshot();
    });

    it('should be 2 users', () => {
        expect(usersList.find('User')).toHaveLength(2);
    });


});