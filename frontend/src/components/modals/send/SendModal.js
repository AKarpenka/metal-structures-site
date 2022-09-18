import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendDesign } from '../../../redux/requestSlice';
import { hideSendModal } from '../../../redux/modalSlice';
import Spinner from '../../spinner/Spinner';
import './SendModal.scss';

export default function SendModal() {
    const [username, setUsername] = useState('');
    const [telephone, setTelephone] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState({});
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
        if (!!username && !!telephone && !!file) {
            dispatch(sendDesign({ username, telephone, message, file }));
        }
    };

    const selectFile = event => {
        const fileTypes = ['image/jpeg', 'application/pdf', 'image/png'];
        if (
            fileTypes.includes(event.target.files[0]?.type) &&
            (event.target.files[0]?.size / 1048576).toFixed() < 10
        ) {
            setFile(event.target.files[0]);
        } else {
            console.log('pnh');
        }
    }

    return (
        <div className="send-modal-window">
            <div>
                <i className="fa fa-times" aria-hidden="true" onClick={() =>  dispatch(hideSendModal())} />
            </div>
            <div className="text-center">
                <h3 className="header-modal font-s-18">ОТПРАВИТЬ ЧЕРТЕЖ НА РАСЧЕТ</h3>
                <p className="text-modal font-s-14">
                    Введите свои данные и мы перезвоним для уточнения деталей:
                </p>
                <form onSubmit={handleSubmit}>
                    <fieldset disabled={state.request.sending}>
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
                        <div className="upload-button">
                            <input
                                type="file"
                                accept=".png, .jpg, .pdf"
                                onChange={selectFile}
                            />
                            <p>до 10мб / jpg,png,pdf</p>
                        </div>
                        <button type="submit" className="btn btn-navy">
                            {state.request.sending ? <Spinner /> : 'ОТПРАВИТЬ'}
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
