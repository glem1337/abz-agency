import React from 'react';

import Header from './Header';

export default class HeaderContainer extends React.Component {

    state = {
        items: [
            {url: 'banner', text: ''},
            {url: 'about-me', text: 'About Me'},
            {url: 'relationships', text: 'Relationships'},
            {url: 'requirements', text: 'Requirements'},
            {url: 'users', text: 'Users'},
            {url: 'register', text: 'Sign Up'},
        ]
    };

    render() {
      const {items} = this.state;
        return (
            <Header items={items}/>
        );
    }
}
