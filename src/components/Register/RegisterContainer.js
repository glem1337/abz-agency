import React from "react";
import Register from './Register';
import {usersApi} from "../../api/api";


class RegisterContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            positionId: null,
            positions: [],
            photoFileName: 'Upload your photo',
        };
        this.fileInput = React.createRef();
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
        //console.log(file)
    };

    handleSubmit = (values) => {
        console.log(values)
    };

    render() {
        return (
            <Register
                positions={this.state.positions}
                fileInputRef={this.fileInput}
                positionId={this.state.positionId}
                photoFileName={this.state.photoFileName}
                onFileInputChange={this.onFileInputChange}
                onRadioInputChange={this.onRadioInputChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }

}

export default RegisterContainer;