/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-rect">
                <div className="max-width-1090 text-right">
                    <p className="margin-bottom-20">Здесь будет логотип</p>
                    <div className="margin-bottom-20">
                        <p>ИП Карпенко Г.Н.</p>
                        <p>УНП 490545970</p>
                    </div>
                    <div className="margin-bottom-20">
                        <p>+375 (29) 125-28-81</p>
                        <p>+375 (29) 238-19-29</p>
                        <p>Ежедневно с 8:00 до 20:00</p>
                    </div>
                    <p>karko73@mail.ru</p>
                </div>
            </div>
        );
    }
}

export default Footer;