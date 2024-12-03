import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/LOGO2.png';
import './Header.scss';

export default function Header() {
    const [isScrolled, setScrolled] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = e => {
        if (window.scrollY === 0) {
            setScrolled(false);
        } else if (window.scrollY > 0) {
            setScrolled(true);
        }
    };

    return (
        <div className="header-rect">
            <div
                className={`header-sticky${
                    isScrolled || location.pathname !== '/main' ? ' header-blackout' : ''
                }`}
            >
                <div className="max-width-1440">
                    <div>
                        <div className='numbers'>
                            <p className="font-s-18 text-right mb-0">+375 (29) 154-24-63</p>
                            <p className="font-s-18 text-right mb-0">+375 (25) 154-24-63</p>
                        </div>
                        <p className="font-s-12 text-right mb-0">ежедневно с 8:00 до 20:00</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between margin-top-10">
                        <div className="d-flex align-items-center width-45 font-s-18">
                            <img src={Logo} alt="img" />
                            <span className='title'>МЕТАЛЛОКОНСТРУКЦИИ В ГОМЕЛЕ</span>
                        </div>
                        <div className="width-55 font-s-16">
                            <nav className="d-flex align-items-center justify-content-between">
                                <span
                                    className={`menu${
                                        location.pathname === '/main'
                                            ? `${' '}selected`
                                            : ''
                                    }`}
                                    onClick={() => navigate('/main')}
                                >
                                    главная
                                </span>
                                <span
                                    className={`menu${
                                        location.pathname.includes('/portfolio')
                                            ? ' selected'
                                            : ''
                                    }`}
                                    onClick={() => navigate('/portfolio/FENCE')}
                                >
                                    продукция
                                </span>
                                <span
                                    className={`menu${
                                        location.pathname === '/about-us'
                                            ? `${' '}selected`
                                            : ''
                                    }`}
                                    onClick={() => navigate('/about-us')}
                                >
                                    о нас
                                </span>
                                {/* <span className="menu">Калькулятор стоимости</span> */}
                                <span
                                    className={`menu${
                                        location.pathname === '/contacts'
                                            ? `${' '}selected`
                                            : ''
                                    }`}
                                    onClick={() => navigate('/contacts')}
                                >
                                    контакты
                                </span>
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        // data-modal="call-modal"
                                    >
                                        ЗАКАЗАТЬ ЗВОНОК
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
