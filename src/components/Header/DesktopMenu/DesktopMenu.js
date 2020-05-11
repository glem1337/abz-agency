import React from 'react';
import Scrollspy from 'react-scrollspy'


const DesktopMenu = ({items}) => (
    <div className="desktop-menu">
        <nav className="desktop-menu__nav">
            <Scrollspy
                items={items.map(item => (item.url))}
                offset={-60}
                currentClassName="is-active"
                className="desktop-menu__list"
            >
                {items.map((item, index) => (
                    <li key={`menu-item-${index}`} className="desktop-menu__item">
                        <a href={`#${item.url}`} className="desktop-menu__link">
                            {item.text}
                        </a>
                    </li>
                ))}
            </Scrollspy>
        </nav>
    </div>
);

export default DesktopMenu;
