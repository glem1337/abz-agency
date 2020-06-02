import React from "react";
import Register from './Register';
import {usersApi} from "../../api/api";
import {reset} from 'redux-form'
import {connect} from "react-redux";
import usersOperations from '../../Redux/Users/UsersOperations';
import {resetUsersData} from '../../Redux/Users/UsersActions';

const INITIAL_STATE = {
    photoFileName: 'Upload your photo',
    positionId: null,
    modalMessage: '',
    modalShow: false
};

class RegisterContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...INITIAL_STATE,
            positions: [],
        };
    }

    componentDidMount = async () => {
        const positions = await usersApi.getUsersPositions();
        this.setState({
            positions: positions
        });
    };

    onRadioInputChange = (e) => {
        this.setState({
            positionId: e.target.value
        });
    };

    onFileInputChange = (file) => {
        this.setState({
            photoFileName: (file && file.name) || 'Upload your photo',
        });
    };

    handleSubmit = async (values, dispatch) => {
        const token = await usersApi.getToken();
        values.token = token;
        const userAddResponse = await usersApi.addUser(values)
        const {getUsers, resetUsersData} = this.props;

        let nextUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6';
        if (window.innerWidth < 768) {
            nextUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=3';
        }

        switch (userAddResponse) {
            case 'New user successfully registered':
                this.setState({
                    ...INITIAL_STATE,
                });
                dispatch(reset('register'));
                dispatch(resetUsersData());
                getUsers(nextUrl);
                break;
            case 'Network Error':
                this.setState({
                    modalMessage: 'Network Error',
                });
                break;
            case 'Request failed with status code 401':
                this.setState({
                    modalMessage: 'The token expired',
                });
                break;
            case 'Request failed with status code 409':
                this.setState({
                    modalMessage: 'User with this phone or email already exist',
                });
                break;
            case 'Request failed with status code 422':
                this.setState({
                    modalMessage: 'Validation failed',
                });
                break;
            default:
                break;
        }
        this.setState({
            modalShow: true
        });

    };

    handleCloseModal = () => {
        this.setState({modalShow: false});
    };

    render() {
        return (
            <Register
                positions={this.state.positions}
                positionId={this.state.positionId}
                photoFileName={this.state.photoFileName}
                onFileInputChange={this.onFileInputChange}
                onRadioInputChange={this.onRadioInputChange}
                handleSubmit={this.handleSubmit}
                modalShow={this.state.modalShow}
                handleCloseModal={this.handleCloseModal}
                modalMessage={this.state.modalMessage}
            />
        );
    }

}

const mapDispatchToProps = {
    getUsers: usersOperations.getUsers,
    resetUsersData,
};

export default connect(null, mapDispatchToProps)(RegisterContainer);