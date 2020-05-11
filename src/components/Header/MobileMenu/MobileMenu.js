import React from "react";
import Logo from '../../../assets/logo/logo.svg';
import Scrollspy from "react-scrollspy";

const MobileMenu = ({items}) => (
    <div className={'mobile-menu'}>
        <div className="mobile-menu__header">
            <a href="/abz-agency/">
                <img
                    src={Logo}
                    alt="abz.agency"
                    width="135"
                    height="20"
                />
            </a>
        </div>
        <nav className="mobile-menu__nav">
            <Scrollspy
                items={items.map(item => (item.url))}
                offset={-60}
                currentClassName="is-active"
                className="mobile-nav"
            >
                {items.map((item, index) => (
                    <li key={`menu-item-${index}`} className="mobile-nav__item">
                        <a href={`#${item.url}`} className="mobile-nav__link">
                            {item.text}
                        </a>
                    </li>
                ))}
            </Scrollspy>
        </nav>
    </div>
);

export default MobileMenu;