import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { askForRecalling } from '../../redux/actions/requestActions';
import './ContactUs.scss';

export class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', telephone: '', message: '' };
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
            this.props.askForRecalling({
                username: this.state.username,
                telephone: this.state.telephone,
                message: this.state.message
            });
        }
    };

    render() {
        const { username, telephone, message } = this.state;

        return (
            <div className="contact-us-rect">
                <div className="max-width-1090">
                    <div className="corner-header">
                        <div className="corner-left" />
                        <div className="corner-text">
                            <div>ОСТАЛИСЬ ВОПРОСЫ?</div>
                            <div>ЗАДАЙТЕ ИХ НАМ</div>
                        </div>
                    </div>
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
                    <button type="button" className="btn btn-primary" onClick={this.sendData}>
                        ОТПРАВИТЬ
                    </button>
                    <p className="footer-modal font-s-11">
                        Нажимая на кнопку, вы даете согласие на обработку своих персональных данных
                    </p>
                </div>
            </div>
        );
    }
}

ContactUs.propTypes = {
    askForRecalling: PropTypes.func
};

const mapDispatchToProps = {
    askForRecalling
};

export default connect(null, mapDispatchToProps)(ContactUs);
