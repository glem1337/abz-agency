import React from 'react';
import {connect} from 'react-redux';

import Users from './Users';
import usersOperations from '../../Redux/Users/UsersOperations';
import usersSelectors from '../../Redux/Users/UsersSelectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        const {getUsers} = this.props;
        let nextUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6';
        if (window.innerWidth < 768) {
            nextUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=3';
        }
        getUsers(nextUrl);
    };

    handleNextUsersList = () => {
        const {getUsers, nextUrl} = this.props;
        getUsers(nextUrl);
    };

    render() {
        const {usersList, error, isFetching, nextUrl} = this.props;
        return (
            <Users
                nextUrl={nextUrl}
                usersList={usersList}
                handleNextUsersList={this.handleNextUsersList}
                error={error}
                isFetching={isFetching}
            />
        );
    }
}

const mapStateToProps = state => ({
    usersList: usersSelectors.getUsers(state),
    nextUrl: usersSelectors.getNextUrl(state),
    isFetching: usersSelectors.getIsFetching(state),
    error: usersSelectors.getError(state),
});

const mapDispatchToProps = {
    getUsers: usersOperations.getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
