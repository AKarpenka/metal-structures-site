/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = e => {
        if (window.scrollY === 0) {
            this.setState({
                isScrolled: false
            });
        } else if (window.scrollY > 0) {
            this.setState({
                isScrolled: true
            });
        }
    };

    render() {
        const { isScrolled } = this.state;
        return (
            <div className="header-rect">
                <div className={`header-sticky${isScrolled ? ' header-blackout' : ''}`}>
                    <div className="max-width-1150">
                        <div>
                            <p className="font-s-18 text-right mb-0">+375 (29) 154-24-63</p>
                            <p className="font-s-18 text-right mb-0">+375 (25) 154-24-63</p>
                            <p className="font-s-12 text-right mb-0">Ежедневно с 8:00 до 20:00</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4">
                            <div className="width-45 font-s-20">
                                <span>МЕТАЛЛОКОНСТРУКЦИИ В ГОМЕЛЕ</span>
                            </div>
                            <div className="width-55 font-s-14">
                                <nav className="d-flex align-items-center justify-content-between">
                                    <span className="menu selected">Главная</span>
                                    <span className="menu">Продукция</span>
                                    <span className="menu">О нас</span>
                                    {/* <span className="menu">Калькулятор стоимости</span> */}
                                    <span className="menu">Контакты</span>
                                    <div>
                                        <button type="button" className="btn btn-primary">
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
}
export default Header;
