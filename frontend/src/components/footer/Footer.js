import React from 'react';
import Logo from '../../assets/images/LOGO2.png';
import './Footer.scss';

export default function Footer() {
    return (
        <div className="footer-rect">
            <div className="max-width-1090 text-right">
                <div className="d-inline-flex align-items-center margin-bottom-20">
                    <p>Металлоконструкции в Гомеле</p>
                    <img src={Logo} alt="img" />
                </div>
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
