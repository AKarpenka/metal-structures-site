import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { askForRecalling } from '../../redux/requestSlice';
import './ContactUs.scss';

export default function ContactUs() {
    const [username, setUsername] = useState('');
    const [telephone, setTelephone] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    };

    const handleTelephoneChange = event => {
        setTelephone(event.target.value);
    };

    const handleMessageChange = event => {
        setMessage(event.target.value);
    };

    const handleSubmit = event => {
        event && event.preventDefault();
        if (!!username && !!telephone) {
            dispatch(askForRecalling({ username, telephone, message}));
        }
    };

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
                <form onSubmit={handleSubmit}>
                    <div className="fields">
                        <label class="input">
                            <input
                                class="input__field"
                                type="text"
                                placeholder=" "
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                            <span class="input__label">Ваше имя *</span>
                        </label>
                        <div className="field">
                            <label class="input">
                                <textarea
                                    class="input__field"
                                    placeholder=" "
                                    value={message}
                                    onChange={handleMessageChange}
                                />
                                <span class="input__label">Ваше сообщение</span>
                            </label>
                        </div>
                        <label class="input">
                            <input
                                class="input__field"
                                type="text"
                                placeholder=" "
                                value={telephone}
                                onChange={handleTelephoneChange}
                                required
                            />
                            <span class="input__label">Ваш телефон *</span>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        ОТПРАВИТЬ
                    </button>
                </form>
                <p className="footer-modal font-s-12">
                    Нажимая на кнопку, вы даете согласие на обработку своих персональных данных
                </p>
            </div>
        </div>
    );
}
