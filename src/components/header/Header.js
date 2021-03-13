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
                    <div className="max-width-1440">
                        <div>
                            <p className="text-right mb-0">+375 (29) 154-24-63</p>
                            <p className="text-right mb-0">+375 (25) 154-24-63</p>
                            <p className="text-right font-small mb-0">Пн-Вс 8.00 - 20.00</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4">
                            <div className="width-33">
                                <span>МЕТАЛЛОКОНСТРУКЦИИ В ГОМЕЛЕ</span>
                            </div>
                            <div className="width-66">
                                <nav className="d-flex align-items-center justify-content-between">
                                    <span className="menu selected">Главная</span>
                                    <span className="menu">Продукция</span>
                                    <span className="menu">О нас</span>
                                    <span className="menu">Калькулятор стоимости</span>
                                    <span className="menu">Контакты</span>
                                    <div>
                                        <button type="button" className="btn btn-primary">
                                            Заказать звонок
                                        </button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-width-750 text-center mt-5">
                    <div>
                        <h1 className="weight-400">
                            ПРОИЗВОДСТВО МЕТАЛЛОКОНСТРУКЦИЙ ПО ИНДИВИДУАЛЬНЫМ ЗАКАЗАМ
                        </h1>
                        <div className="mt-4">
                            <p className="mb-0">
                                Опыт работы более 15 лет на рынке металлоконструкций. При
                                производстве используются современные технологии и уделяется
                                внимание тщательному контролю качества производимой продукции.
                            </p>
                            <p className="mb-0">
                                Всегда готовы проконсультировать и помочь в осуществлении наиболее
                                оптимального выбора!
                            </p>
                            <p className="mb-0">Работаем по Гомелю и Гомельской области.</p>
                        </div>
                        <p className="mt-4">
                            <span className="dashed-border">ПОДРОБНЕЕ {'>'}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;
