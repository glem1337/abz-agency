import React from 'react';
import Logo from "../../../assets/logo/logo.svg";
import Scrollspy from 'react-scrollspy'
import classNames from "classnames";


const Menu = ({items, isMenuOpen}) => {
    const menuClass = classNames('menu', {'is-open': isMenuOpen});
    return (
        <div className={menuClass}>
            <div className="menu__header">
                <a href="/abz-agency/">
                    <img
                        src={Logo}
                        alt="abz.agency"
                        width="135"
                        height="20"
                    />
                </a>
            </div>
            <nav className="menu__nav">
                <Scrollspy
                    items={items.map(item => (item.url))}
                    offset={-60}
                    currentClassName="is-active"
                    className="menu__list"
                >
                    {items.map((item) => (
                        <li key={`menu-item-${item.url}`} className="menu__item">
                            <a href={`#${item.url}`} className="menu__link">
                                {item.text}
                            </a>
                        </li>
                    ))}
                </Scrollspy>
            </nav>
        </div>
    );
};

export default Menu;
