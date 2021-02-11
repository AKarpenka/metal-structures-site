import React from 'react';
import './Header.scss';

class Header extends React.Component {
    static ololo() {}

    render() {
        return (
            <div className="container top-rect">
                <div className="row justify-content-end">
                    <div className="text-color-white">
                        <div>+375 (29) 154-24-63</div>
                        <div>+375 (25) 154-24-63</div>
                        <div>Пн-Вс 8.00 - 20.00</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;
