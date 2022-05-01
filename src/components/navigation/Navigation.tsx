import React from 'react';
import { CustomLink } from './CustomLink';
import coloredLogo from '../../img/lltLogos/logo-colored.svg';
import { MenuButton } from './MenuButton';
import { MobileNavigationOverlay } from './MobileNavigationOverlay';

type State = {
    isOpen: boolean;
};

export class Navigation extends React.Component<{}, State> {

    constructor (props: {}) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
    }

    state = {
        isOpen: false
    }

    // toggleNav toggles the mobile navigation modal (MobileNavigationOverlay)
    toggleNav() {
        // we need to toggle the y overflow on the body for the navigation
        // modal so the modal is not only full screen but also non-scrollable
        document.body.classList.toggle("overflow-y-hidden")
        document.getElementById('nav-button')?.classList.toggle('-menu-open');
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render () {
        return <nav className="bg-blue-1 text-text-l absolute w-full">
            {
                this.state.isOpen &&
                <MobileNavigationOverlay  close={this.toggleNav}/>
            }
            <div className="container flex flex-wrap justify-between items-center mx-auto p-1 tabletL:w-4/5">
                <div className="flex items-center p-4">
                    <CustomLink to="/">
                        <img src={coloredLogo} alt="" className="w-16 tabletL:w-20 xl:w-24 ml-2"/>
                    </CustomLink>
                </div>
                <div className="inline-flex items-center justify-center p-2 ml-3 tabletL:hidden">
                    <MenuButton toggleNav={this.toggleNav} />
                </div>
                <div className="hidden w-full ml-4 my-4 tabletL:flex tabletL:flex-row tabletL:gap-8 tabletL:w-auto tabletL:justify-center 2xl:text-head-s">
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/event">Event</CustomLink>
                    <CustomLink to="/team" className="text-gray-700">Team</CustomLink>
                    <CustomLink to="/join" className="font-medium text-blue-11">Mitmachen</CustomLink>
                </div>
            </div>
        </nav>
    }

}
