/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hideCallModal } from '../../../redux/actions/modalAction';
import './CallModal.scss';

export class CallModal extends React.Component {
    hideCallModalWindow = () => {
        this.props.hideCallModal();
    };

    render() {
        return (
            <div className="modal-window text-center">
                <h3 className="header-modal font-s-18">ЗАКАЗАТЬ ЗВОНОК</h3>
                <p className="text-modal font-s-14">
                    Введите свои данные и мы перезвоним для уточнения деталей:
                </p>
                <div className="fields">
                    <div>
                        <input type="text" placeholder="Ваше имя *" required />
                    </div>
                    <div className="field">
                        <textarea placeholder="Ваше сообщение" />
                    </div>
                    <div>
                        <input type="text" placeholder="Ваш телефон *" required />
                    </div>
                </div>
                <button type="button" className="btn btn-navy" onClick={this.hideCallModalWindow}>
                    ОТПРАВИТЬ
                </button>
                <p className="footer-modal font-s-11">
                    Нажимая на кнопку, вы даете согласие на обработку своих персональных данных
                </p>
            </div>
        );
    }
}

CallModal.propTypes = {
    hideCallModal: PropTypes.func
};

const mapDispatchToProps = {
    hideCallModal
};

export default connect(null, mapDispatchToProps)(CallModal);
