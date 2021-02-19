import React from 'react';
import Header from '../header/Header';
import Production from '../production/Production';
import './Main.scss';

class Main extends React.Component {
    static ololo() {}

    render() {
        return (
            <div>
                <div className="header">
                    <div className="blue-trans-rect" />
                    <Header />
                </div>
                <Production />
            </div>
        );
    }
}

export default Main;
