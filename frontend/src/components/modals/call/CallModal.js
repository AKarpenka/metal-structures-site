import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
// import api from '../../../api/mails'
import Spinner from '../../spinner/Spinner';
import Modal from '../Modal';
import './CallModal.scss';

export default function CallModal({ closeFn = () => null, open = false }) {
    const [userName, setUsername] = useState('');
    const [userNameDirty, setUserNameDirty] = useState(false);
    const [userNameError, setUserNameError] = useState('Заполните, пожалуйста, обязательное поле');
    const [telephone, setTelephone] = useState('');
    const [telephoneDirty, setTelephoneDirty] = useState(false);
    const [message, setMessage] = useState('');
    const [formValid, setFormValid] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (userNameError || telephoneDirty) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [userNameError,telephoneDirty]);

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'userName':
                setUserNameDirty(true);
                break;
            case 'telephone':
                let val = e.target.value.split('');
                if (val.length == 0) {
                    setTelephoneDirty(true)
                } else {
                    val.some(el => el == '_') ? setTelephoneDirty(true) : setTelephoneDirty(false);
                }
                break;
        }
    }

    const handleUsernameChange = event => {
        setUsername(event.target.value);
        if (event.target.value == '') {
            setUserNameError('Заполните, пожалуйста, обязательное поле');
        } else if (!/^[a-zA-ZЁёА-я\-]+$/.test(event.target.value)) {
            setUserNameError('Имя некорректно');
        } else {
            setUserNameError('');
        }
    };

    const handleTelephoneChange = event => {
        setTelephone(event.target.value);
    };

    const handleMessageChange = event => {
        setMessage(event.target.value);
    };

    const handleSubmit = async event => {
        event && event.preventDefault();
        if (!!userName && !!telephone) {
            try {
                setLoading(true);
                // await api.callMe({ userName, telephone, message});
                closeFn();
            } catch (error) {
                console.log(error.response)
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <Modal open={open}>
            <div className='overlay' />
            <div className="call-modal-window text-center">
                <div>
                    <i className="fa fa-times" aria-hidden="true" 
                    onClick={closeFn} 
                    />
                </div>
                <h3 className="header-modal font-s-18">ЗАКАЗАТЬ ЗВОНОК</h3>
                <p className="text-modal font-s-14">
                    Введите свои данные и мы перезвоним для уточнения деталей:
                </p>
                <form onSubmit={handleSubmit}>
                    <fieldset disabled={loading}>
                        <div className="fields">
                            <div className="field">
                                <label className="input">
                                    <input
                                        className="input__field"
                                        type="text"
                                        placeholder=" "
                                        value={userName}
                                        onChange={handleUsernameChange}
                                        name = "userName"
                                        onBlur={blurHandler}
                                        required
                                    />
                                    <span className="input__label">Ваше имя *</span>
                                </label>
                                {(userNameDirty && userNameError) && <p className="errorText"> {userNameError}</p>}
                            </div>

                            <div className="field">
                                <label className="input">
                                    <InputMask 
                                            mask="+375\(99)-999-99-99"   
                                            maskChar="_" 
                                            className="input__field"
                                            type="text"
                                            placeholder=" "
                                            value={telephone}
                                            onChange={handleTelephoneChange}
                                            name = "telephone"
                                            onBlur={blurHandler}
                                            required
                                    />
                                    <span className="input__label">Ваш телефон *</span>
                                </label>
                                {(telephoneDirty) && <p className="errorText">Заполните, пожалуйста, обязательное поле</p>}
                            </div>

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
                            
                        </div>
                        <button type="submit" disabled={!formValid} className="btn btn-navy">
                            {loading ? <Spinner /> : 'ОТПРАВИТЬ'}
                        </button>
                    </fieldset>
                </form>
                <p className="footer-modal font-s-12">
                    Нажимая на кнопку, вы даете согласие на обработку своих персональных данных
                </p>
            </div>
        </Modal>
    );
}
