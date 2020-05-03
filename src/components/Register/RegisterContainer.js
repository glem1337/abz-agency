import React from "react";
import Register from './Register';

const INITIAL_STATE = {
    name: '',
    email: '',
    phone: '',
    positionId: null,
    positionValue: '',
    photoFileName: 'Upload your photo',
    error: {
        name: false,
        email: false,
        phone: false,
        position: false,
        file: false,
    },
    isValidForm: false,
};

class RegisterContainer extends React.Component {
    state = {
        ...INITIAL_STATE,
        messageAfterAddUser: '',
        showModal: false,
    };

    handleSubmit = (values) => {
        console.log(values)
    };

    handleValidationName = name => {
        if (!name || name.length > 60 || name.length < 2) {
            return 'User name, should be 2-60 characters';
        }
        return undefined;
    };

    handleValidationEmail = email => {
        const patternEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (!email) {
            return 'Email is required field';
        } else if (email.length > 100 || !patternEmail.test(email)) {
            return 'The email must be a valid email address';
        }
        return undefined;
    };

    handleValidationPhone = phone => {
        const patternPhone = /^\+?3?8?(0\d{9})$/;
        if (!phone) {
            return 'Phone is required field';
        } else if (!patternPhone.test(phone)) {
            return 'User phone number, should start with code of Ukraine +380';
        }
        return undefined;
    };


    render() {
        return (
            <Register
                handleValidationName={this.handleValidationName}
                handleValidationEmail={this.handleValidationEmail}
                handleValidationPhone={this.handleValidationPhone}
                handleSubmit={this.handleSubmit}
            />
        );
    }

}

export default RegisterContainer;