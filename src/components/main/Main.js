import React from 'react';
import AboutUsHeader from '../about-us-header/AboutUsHeader';
import Header from '../header/Header';
import Production from '../production/Production';
import './Main.scss';

class Main extends React.Component {
    static ololo() {}

    render() {
        return (
            <div>
                <Header />
                <div className="header-image">
                    <div className="blue-trans-rect" />
                    <AboutUsHeader />
                </div>
                <Production />
            </div>
        );
    }
}

export default Main;
