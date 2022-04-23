import React from 'react';
import logo from './img/logo-colored.svg';

type Props = {
    toggleNav: () => void;
};

type State = {
    isOpen: boolean;
};

export class Navigation extends React.Component<Props, State> {

    state = {
        isOpen: false
    }

    render () {
        return <nav className="bg-blue-1 text-text-l">
            <div className="container flex flex-wrap justify-between items-center mx-auto p-1 tabletL:w-4/5">
                <div className="flex items-center">
                    <img src={logo} alt="" className="w-16 tabletL:w-24 ml-2"/>
                </div>
                <div className="inline-flex items-center justify-center p-2 ml-3 tabletL:hidden">
                    <svg
                        onClick={this.props.toggleNav}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-14 h-14 cursor-pointer p-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </div>
                <div className="hidden w-full ml-4 my-4 tabletL:flex tabletL:flex-row tabletL:gap-8 tabletL:w-auto tabletL:justify-center 2xl:text-head-s"
                     id="mobile-menu">
                    <div className="font-medium border-b-2 border-blue-11 text-blue-12 cursor-pointer w-fit">
                        Home
                    </div>
                    <div className="text-gray-700 cursor-pointer hover:text-blue-11 transition-all">
                        Event
                    </div>
                    <div className="text-gray-700 cursor-pointer hover:text-blue-11 transition-all">
                        Team
                    </div>
                    <div className="font-medium text-blue-11 cursor-pointer hover:text-blue-12 transition-all">
                        Mitmachen
                    </div>
                </div>
            </div>
        </nav>
    }

}
