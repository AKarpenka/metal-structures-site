import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/LOGO2.png';
import { 
    NUMBER_1, 
    NUMBER_2, 
    WORKING_TIME, 
    TITLE,
    NAV_MAIN,
    NAV_PORTFOLIO,
    NAV_ABOUT,
    NAV_CONTACTS
 } from './constants';

import './Header.scss';

export default function Header() {
    const [isScrolled, setScrolled] = useState(false)
    const navigate = useNavigate();

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
                            <p className="font-s-18 text-right mb-0">{NUMBER_1}</p>
                            <p className="font-s-18 text-right mb-0">{NUMBER_2}</p>
                        </div>
                        <p className="font-s-12 text-right mb-0">{WORKING_TIME}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between margin-top-10">
                        <div className="d-flex align-items-center width-45 font-s-18">
                            <img src={Logo} alt="img" />
                            <span className='title'>{TITLE}</span>
                        </div>
                        <div className="font-s-16">
                            <nav className="d-flex align-items-center justify-content-between">
                                <span
                                    className={`menu${
                                        location.pathname === '/main'
                                            ? `${' '}selected`
                                            : ''
                                    }`}
                                    onClick={() => navigate('/main')}
                                >
                                    {NAV_MAIN}
                                </span>
                                <span
                                    className={`menu${
                                        location.pathname.includes('/portfolio')
                                            ? ' selected'
                                            : ''
                                    }`}
                                    onClick={() => navigate('/portfolio/FENCE')}
                                >
                                    {NAV_PORTFOLIO}
                                </span>
                                <span
                                    className={`menu${
                                        location.pathname === '/about-us'
                                            ? `${' '}selected`
                                            : ''
                                    }`}
                                    onClick={() => navigate('/about-us')}
                                >
                                    {NAV_ABOUT}
                                </span>
                                <span
                                    className={`menu ${
                                        window.location.pathname === '/contacts'
                                            ? `selected`
                                            : ''
                                    }`}
                                    onClick={() => navigate('/contacts')}
                                >
                                    {NAV_CONTACTS}
                                </span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
