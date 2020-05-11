import React, {Component, createRef} from 'react';

import MobileMenu from './MobileMenu';

export default class MobileMenuContainer extends Component {
    backdropRef = createRef();
    animationDuration = '600';

    componentDidMount() {
        document.body.style.overflow = 'hidden';
        window.addEventListener('click', this.handleWindowClick);
        window.addEventListener('keydown', this.handleEscClick);
    }

    componentWillUnmount() {
        document.body.style.overflow = 'auto';
        window.removeEventListener('click', this.handleWindowClick);
        window.removeEventListener('keydown', this.handleEscClick);
    }


    closeMenu = () => {
        const {onCloseMenu} = this.props;
        this.backdropRef.current.classList.add('slide-down');
        setTimeout(onCloseMenu, +this.animationDuration);
    };

    handleWindowClick = ({target}) => {
        if (this.backdropRef.current === target || target.className === 'mobile-nav__link') {
            this.closeMenu();
        }
    };

    handleEscClick = e => {
        if (e.code !== 'Escape') {
            return;
        }
        this.closeMenu();
    };

    render() {
        console.log('render')
        const {items} = this.props;
        return (
            <div
                className="backdrop"
                ref={this.backdropRef}
                data-aos="slide-down"
                data-aos-duration={this.animationDuration}
            >
                <MobileMenu items={items}/>
            </div>
        );
    }
}
