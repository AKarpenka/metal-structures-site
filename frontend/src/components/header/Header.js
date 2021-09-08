/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showCallModal } from '../../redux/actions/modalAction';
import Logo from '../../assets/images/LOGO2.png';
import './Header.scss';

export class Header extends React.Component {
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

    showCallModalWindow = () => {
        this.props.showCallModal();
    };

    render() {
        const { isScrolled } = this.state;
        const { history } = this.props;
        return (
            <div className="header-rect">
                <div
                    className={`header-sticky${
                        isScrolled || window.location.pathname !== '/main' ? ' header-blackout' : ''
                    }`}
                >
                    <div className="max-width-1440">
                        <div>
                            <p className="font-s-18 text-right mb-0">+375 (29) 154-24-63</p>
                            <p className="font-s-18 text-right mb-0">+375 (25) 154-24-63</p>
                            <p className="font-s-12 text-right mb-0">Ежедневно с 8:00 до 20:00</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between margin-top-10">
                            <div className="d-flex align-items-center width-45 font-s-20">
                                <img src={Logo} alt="img" />
                                <span>МЕТАЛЛОКОНСТРУКЦИИ В ГОМЕЛЕ</span>
                            </div>
                            <div className="width-55 font-s-14">
                                <nav className="d-flex align-items-center justify-content-between">
                                    <span
                                        className={`menu${
                                            window.location.pathname === '/main'
                                                ? `${' '}selected`
                                                : ''
                                        }`}
                                        onClick={() => history.push('/main')}
                                    >
                                        Главная
                                    </span>
                                    <span
                                        className={`menu${
                                            window.location.pathname === '/portfolio'
                                                ? ' selected'
                                                : ''
                                        }`}
                                        onClick={() => history.push('/portfolio')}
                                    >
                                        Продукция
                                    </span>
                                    <span className="menu">О нас</span>
                                    <span className="menu">Продукция</span>
                                    <span
                                        className={`menu${
                                            window.location.pathname === '/about-us'
                                                ? `${' '}selected`
                                                : ''
                                        }`}
                                        onClick={() => history.push('/about-us')}
                                    >
                                        О нас
                                    </span>
                                    {/* <span className="menu">Калькулятор стоимости</span> */}
                                    <span
                                        className={`menu${
                                            window.location.pathname === '/contacts'
                                                ? `${' '}selected`
                                                : ''
                                        }`}
                                        onClick={() => history.push('/contacts')}
                                    >
                                        Контакты
                                    </span>
                                    <div>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={this.showCallModalWindow}
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
}

Header.propTypes = {
    showCallModal: PropTypes.func,
    history: PropTypes.object
};

const mapDispatchToProps = {
    showCallModal
};

export default connect(null, mapDispatchToProps)(Header);
