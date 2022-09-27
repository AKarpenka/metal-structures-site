import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { askForRecalling } from '../../../redux/requestSlice';
import { hideCallModal } from '../../../redux/modalSlice';
import Spinner from '../../spinner/Spinner';
import './CallModal.scss';

export default function CallModal() {
    const [username, setUsername] = useState('');
    const [telephone, setTelephone] = useState('');
    const [message, setMessage] = useState('');
    const state = useSelector((state) => state);
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
        <div className="call-modal-window text-center">
            <div>
                <i className="fa fa-times" aria-hidden="true" onClick={() =>  dispatch(hideCallModal())} />
            </div>
            <h3 className="header-modal font-s-18">ЗАКАЗАТЬ ЗВОНОК</h3>
            <p className="text-modal font-s-14">
                Введите свои данные и мы перезвоним для уточнения деталей:
            </p>
            <form onSubmit={handleSubmit}>
                <fieldset disabled={state.request.sending}>
                    <div className="fields">
                        <label className="input">
                            <input
                                className="input__field"
                                type="text"
                                placeholder=" "
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                            <span className="input__label">Ваше имя *</span>
                        </label>
                        <div className="field">
                            <label className="input">
                                <textarea
                                    className="input__field"
                                    placeholder=" "
                                    value={message}
                                    onChange={handleMessageChange}
                                />
                                <span className="input__label">Ваше сообщение</span>
                            </label>
                        </div>
                        <label className="input">
                            <input
                                className="input__field"
                                type="text"
                                placeholder=" "
                                value={telephone}
                                onChange={handleTelephoneChange}
                                required
                            />
                            <span className="input__label">Ваш телефон *</span>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-navy">
                        {state.request.sending ? <Spinner /> : 'ОТПРАВИТЬ'}
                    </button>
                </fieldset>
            </form>
            <p className="footer-modal font-s-12">
                Нажимая на кнопку, вы даете согласие на обработку своих персональных данных
            </p>
        </div>
    );
}
