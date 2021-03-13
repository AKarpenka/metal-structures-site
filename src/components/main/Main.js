import React from 'react';
import AboutUs from '../about-us/AboutUs';
import Header from '../header/Header';
import Production from '../production/Production';
import './Main.scss';

class Main extends React.Component {
    static ololo() {}

    render() {
        return (
            <div>
                {/* <div> */}
                <Header />
                {/* </div> */}
                <div className="header-image">
                    <div className="blue-trans-rect" />
                    <AboutUs />
                </div>
                <Production />
            </div>
        );
    }
}

export default Main;
