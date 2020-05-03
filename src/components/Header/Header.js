import React from 'react';

import DesktopMenu from './components/DesktopMenu';

import Logo from '../../assets/logo/logo.svg';
import {Container} from "react-bootstrap";

const Header = ({items}) => (
    <>
        <header className="header">
            <Container className={'header__container'}>
                <a className="header__link" href="/abz-agency/">
                    <img
                        className="header__logo"
                        src={Logo}
                        alt="abz.agency"
                        width="135"
                        height="20"
                    />
                </a>
                <DesktopMenu items={items} />
            </Container>
        </header>
    </>
);

export default Header;
