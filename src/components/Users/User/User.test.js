import React from 'react';
import {shallow} from 'enzyme'
import User from "./User";
import {formatPhone} from "../../../utils/format/format"

describe('User', () => {

    const props = {
        user: {
            name: 'John Doe',
            photo: '/src/to/img/image.png',
            position: 'Lawyer',
            email: 'email@gmail.com',
            phone: '+380992104201',
        }
    };

    const user = shallow(<User {...props} />)

    it('renders properly', () => {
        expect(user).toMatchSnapshot();
    });

    it('should be correct data', () => {
        expect(user.find('.user__name').text()).toEqual(props.user.name);
        expect(user.find('.user__photo')).toHaveLength(1);
        expect(user.find('ReactTooltip')).toHaveLength(1);
        expect(user.find('.user__position').text()).toEqual(props.user.position);
        expect(user.find('.user__email').text()).toEqual(props.user.email);
        expect(user.find('.user__phone').text()).toEqual(formatPhone(props.user.phone));
    });


});