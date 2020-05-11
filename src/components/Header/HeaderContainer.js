import React from 'react';

import Header from './Header';

export default class HeaderContainer extends React.Component {

    state = {
        isMenuOpen: false,
        items: [
            {url: 'banner', text: ''},
            {url: 'about-me', text: 'About me'},
            {url: 'relationships', text: 'Relationships'},
            {url: 'requirements', text: 'Requirements'},
            {url: 'users', text: 'Users'},
            {url: 'register', text: 'Sign Up'},
        ]
    };

    onToggleMenu = () => {
        this.setState(prevState => ({isMenuOpen: !prevState.isMenuOpen}));
    };


    render() {
        const {items, isMenuOpen} = this.state;
        return (
            <Header
                onToggleMenu={this.onToggleMenu}
                isMenuOpen={isMenuOpen}
                items={items}
            />
        );
    }
}
