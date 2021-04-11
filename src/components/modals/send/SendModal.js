/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hideSendModal } from '../../../redux/actions/modalAction';
import './SendModal.scss';

export class SendModal extends React.Component {
    hideCallModalWindow = () => {
        this.props.hideSendModal();
    };

    selectFile = event => {
        const fileTypes = ['image/jpeg', 'image/pjpeg', 'image/png'];
        if (
            fileTypes.includes(event.target.files[0].type) &&
            (event.target.files[0].size / 1048576).toFixed() < 10
        ) {
            console.log('correct format and size');
        } else {
            console.log('pnh');
        }
    };

    render() {
        return (
            <div className="send-modal-window">
                <div className="text-center">
                    <h3 className="header-modal font-s-18">ОТПРАВИТЬ ЧЕРТЕЖ НА РАСЧЕТ</h3>
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
                </div>
                <div className="upload-button">
                    <input type="file" accept=".png, .jpg, .pdf" onChange={this.selectFile} />
                    <p>до 10мб / jpg,png,pdf</p>
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

SendModal.propTypes = {
    hideSendModal: PropTypes.func
};

const mapDispatchToProps = {
    hideSendModal
};

export default connect(null, mapDispatchToProps)(SendModal);
