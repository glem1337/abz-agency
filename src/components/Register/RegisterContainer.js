import React from "react";
import Register from './Register';
import {usersApi} from "../../api/api";


class RegisterContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            positionId: null,
            positions: []
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

    handleSubmit = (values) => {
        console.log(values)
    };

    render() {
        return (
            <Register
                positions={this.state.positions}
                positionId={this.state.positionId}
                onRadioInputChange={this.onRadioInputChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }

}

export default RegisterContainer;