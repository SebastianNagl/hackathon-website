import React from 'react';
import './Greeting.css'

export class Greeting extends React.Component {

    render () {
        return <div className="text-left relative mb-10 wd-10/12 xs:w-10/12 lxs:w-8/12 sm:w-7/12 md:w-8/12 lg:w-7/12 xl:w-1/2 2xl:w-5/12">

            {/* the container div is just used for placing the hearts on the
             background, without if it's nearly impossible to have a
              somewhat responsive placement of the 3 hearts */}
            <div id="heart-background">

                <div className="font-medium text-blue-12 text-5xl iPhoneXS:text-5xl text-left lg:text-7xl tabletL:pl-10">
                    Legal Tech
                </div>

                <div className="leading-none font-pen font-medium iPhoneXS:text-8xl text-8xl xl:text-10xl lg:text-8xl text-red-10 text-center -ml-12">
                    loves
                </div>

                <div className="leading-4 relative text-8xl iPhoneXS:text-8xl lg:text-10xl font-medium text-blue-12 text-right tabletL:pr-10">
                    you!
                </div>

            </div>

        </div>
    }

}
