/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendDesign } from '../../../redux/actions/requestActions';
import './SendModal.scss';
import Spinner from '../../spinner/Spinner';

export class SendModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', telephone: '', message: '', file: {} };
        this.selectFile = this.selectFile.bind(this);
    }

    handleUsernameChange = event => {
        this.setState({ username: event.target.value });
    };

    handleTelephoneChange = event => {
        this.setState({ telephone: event.target.value });
    };

    handleMessageChange = event => {
        this.setState({ message: event.target.value });
    };

    handleSubmit = event => {
        event && event.preventDefault();
        if (!!this.state.username && !!this.state.telephone) {
            this.props.sendDesign({
                username: this.state.username,
                telephone: this.state.telephone,
                message: this.state.message,
                file: this.state.file
            });
        }
    };

    selectFile(event) {
        const fileTypes = ['image/jpeg', 'application/pdf', 'image/png'];
        if (
            fileTypes.includes(event.target.files[0].type) &&
            (event.target.files[0].size / 1048576).toFixed() < 10
        ) {
            this.setState({ file: event.target.files[0] });
        } else {
            console.log('pnh');
        }
    }

    render() {
        const { username, telephone, message } = this.state;
        const { isSending } = this.props;
        return (
            <div className="send-modal-window">
                <div className="text-center">
                    <h3 className="header-modal font-s-18">ОТПРАВИТЬ ЧЕРТЕЖ НА РАСЧЕТ</h3>
                    <p className="text-modal font-s-14">
                        Введите свои данные и мы перезвоним для уточнения деталей:
                    </p>
                    <form onSubmit={this.handleSubmit}>
                        <fieldset disabled={isSending}>
                            <div className="fields">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Ваше имя *"
                                        value={username}
                                        onChange={this.handleUsernameChange}
                                        required
                                    />
                                </div>
                                <div className="field">
                                    <textarea
                                        placeholder="Ваше сообщение"
                                        value={message}
                                        onChange={this.handleMessageChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Ваш телефон *"
                                        value={telephone}
                                        onChange={this.handleTelephoneChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="upload-button">
                                <input
                                    type="file"
                                    accept=".png, .jpg, .pdf"
                                    onChange={this.selectFile}
                                />
                                <p>до 10мб / jpg,png,pdf</p>
                            </div>
                            <button type="submit" className="btn btn-navy">
                                {isSending ? <Spinner /> : 'ОТПРАВИТЬ'}
                            </button>
                        </fieldset>
                    </form>
                </div>
                <p className="footer-modal font-s-11">
                    Нажимая на кнопку, вы даете согласие на обработку своих персональных данных
                </p>
            </div>
        );
    }
}

SendModal.propTypes = {
    isSending: PropTypes.bool,
    sendDesign: PropTypes.func
};

const mapStateToProps = state => ({
    isSending: state.request.sending
});

const mapDispatchToProps = {
    sendDesign
};

export default connect(mapStateToProps, mapDispatchToProps)(SendModal);
