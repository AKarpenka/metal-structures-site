import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { askForRecalling } from '../../../redux/actions/requestActions';
import './CallModal.scss';
import Spinner from '../../spinner/Spinner';

export class CallModal extends React.Component {
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
        const { isSending } = this.props;

        return (
            <div className="call-modal-window text-center">
                <h3 className="header-modal font-s-18">ЗАКАЗАТЬ ЗВОНОК</h3>
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
                        <button type="submit" className="btn btn-navy">
                            {isSending ? <Spinner /> : 'ОТПРАВИТЬ'}
                        </button>
                    </fieldset>
                </form>
                <p className="footer-modal font-s-11">
                    Нажимая на кнопку, вы даете согласие на обработку своих персональных данных
                </p>
            </div>
        );
    }
}

CallModal.propTypes = {
    isSending: PropTypes.bool,
    askForRecalling: PropTypes.func
};

const mapStateToProps = state => ({
    isSending: state.request.sending
});

const mapDispatchToProps = {
    askForRecalling
};

export default connect(mapStateToProps, mapDispatchToProps)(CallModal);
