import React from 'react';
import Logo from '../../assets/logo/logo.svg';
import MenuIcon from '../../assets/icons/menu-icon.svg';
import {Container} from "react-bootstrap";
import {MenuContainer as Menu} from './Menu/MenuContainer';

const Header = ({items, onToggleMenu, isMenuOpen}) => (
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
                <button
                    className="menu-button"
                    type="button"
                    onClick={onToggleMenu}
                >
                    <img src={MenuIcon}/>
                </button>
                <Menu onCloseMenu={onToggleMenu} isMenuOpen={isMenuOpen} items={items}/>
            </Container>
        </header>
    </>
);

export default Header;
