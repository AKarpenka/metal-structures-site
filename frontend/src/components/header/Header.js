import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/LOGO2.png';
import { 
    NUMBER_1, 
    NUMBER_2,
    TITLE,
    MENU_ITEMS,
 } from './constants';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import './Header.scss';

export default function Header() {
    const [isScrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 990);

    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setScrolled(false);
        } else if (window.scrollY > 0) {
            setScrolled(true);
        }
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth < 990);
    };

    const dropdownMenu = () => {
        return (
            <Dropdown
                menu={{
                    items: MENU_ITEMS,
                    selectable: true,
                    defaultSelectedKeys: ['3'],
                    onClick: ({ key }) => {
                        const selectedItem = MENU_ITEMS.find(item => item.key === key);
                        if (selectedItem) {
                            navigate(selectedItem.location);
                        }
                    },
                }}
            >
                <Typography.Link>
                    <Space>
                        Меню
                        <DownOutlined />
                    </Space>
                </Typography.Link>
            </Dropdown>
        );
    };

    const collapsedMenu = () => {
        return MENU_ITEMS.map(({ key, location, name }) => (
            <span
                key={key}
                className={`menu${
                    location.pathname === location ? ' selected' : ''
                }`}
                onClick={() => navigate(location)}
            >
                {name}
            </span>
        ));
    };

    return (
        <div className="header-rect">
            <div
                className={`header-sticky${
                    isScrolled || location.pathname !== '/main' ? ' header-blackout' : ''
                }`}
            >
                <div className="max-width-1440">
                    {/* Номера телефонов скрыты на мобильных устройствах */}
                    {!isMobile && (
                        <div className="numbers">
                            <p className="font-s-18 text-right mb-0">{NUMBER_1}</p>
                            <p className="font-s-18 text-right mb-0">{NUMBER_2}</p>
                        </div>
                    )}
                    <div className="d-flex align-items-center justify-content-between margin-top-10">
                        <div className="d-flex align-items-center width-45 font-s-18">
                            <img src={Logo} alt="img" />
                            <span className='title'>{TITLE}</span>
                        </div>
                        <div className="font-s-16">
                            <nav className="d-flex align-items-center justify-content-between">
                                {isMobile ? dropdownMenu() : collapsedMenu()}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
