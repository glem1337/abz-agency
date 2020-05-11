import React from 'react';
import {Container} from "react-bootstrap";
import DesktopMenu from './DesktopMenu/DesktopMenu';
import Logo from '../../assets/logo/logo.svg';
import MenuIcon from '../../assets/icons/menu-icon.svg';
import MobileMenu from "./MobileMenu/MobileMenuContainer";

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
                    <img src={MenuIcon} />
                </button>
                <DesktopMenu items={items}/>
                {isMenuOpen && (
                    <MobileMenu
                        onCloseMenu={onToggleMenu}
                        items={items}
                    />
                )}
            </Container>
        </header>
    </>
);

export default Header;
