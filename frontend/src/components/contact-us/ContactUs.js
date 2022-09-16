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
                        <div>
                            <input
                                type="text"
                                placeholder="Ваше имя *"
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                        </div>
                        <div className="field">
                            <textarea
                                placeholder="Ваше сообщение"
                                value={message}
                                onChange={handleMessageChange}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Ваш телефон *"
                                value={telephone}
                                onChange={handleTelephoneChange}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        ОТПРАВИТЬ
                    </button>
                </form>
                <p className="footer-modal font-s-11">
                    Нажимая на кнопку, вы даете согласие на обработку своих персональных данных
                </p>
            </div>
        </div>
    );
}
