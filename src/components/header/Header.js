import React from 'react';
import './Header.scss';

class Header extends React.Component {
    static ololo() {}

    render() {
        return (
            <div className="container header-rect">
                <div className="col-12">
                    <div className="text-color-white text-right">+375 (29) 154-24-63</div>
                    <div className="text-color-white text-right">+375 (25) 154-24-63</div>
                    <div className="text-color-white text-right font-small">Пн-Вс 8.00 - 20.00</div>
                </div>
                <div className="row mt-4">
                    <div className="col-4">
                        <div>МЕТАЛЛОКОНСТРУКЦИИ В ГОМЕЛЕ</div>
                    </div>
                    <div className="col-8">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>Главная</div>
                            <div>Продукция</div>
                            <div>О нас</div>
                            <div>Калькулятор стоимости</div>
                            <div>Контакты</div>
                            <div>
                                <button type="button" className="btn btn-primary">
                                    Заказать звонок
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center text-center mt-5">
                    <div className="col-12">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <div className="w-75 mx-auto mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </div>
                        <div className="mt-4">ПОДРОБНЕЕ --{'>'}</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;
