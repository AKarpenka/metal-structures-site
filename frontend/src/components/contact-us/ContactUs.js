import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { askForRecalling } from '../../redux/requestSlice';
import './ContactUs.scss';
import InputMask from 'react-input-mask';

export default function ContactUs() {

    const [userName, setUsername] = useState('');
    const [userNameDirty, setUserNameDirty] = useState(false);
    const [userNameError, setUserNameError] = useState('Заполните, пожалуйста, обязательное поле');
    const [telephone, setTelephone] = useState('');
    const [telephoneDirty, setTelephoneDirty] = useState(false);
    const [message, setMessage] = useState('');
    const [formValid, setFormValid] = useState(false);

    const dispatch = useDispatch();
  
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

    const handleSubmit = event => {
        event && event.preventDefault();
        if (!!userName && !!telephone) {
            dispatch(sendDesign({ userName, telephone, message }));
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
                        <div className="field-2">
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
                            <label className="input inpt-2">
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


                    
                    <button type="submit" disabled={!formValid} className="btn btn-primary">
                        ОТПРАВИТЬ
                    </button>                {/* {(userNameDirty || telephoneDirty || userValidProgress) && <p className="errorText"> {userError}</p>} */}
                </form>
                <p className="footer-modal font-s-12">
                    Нажимая на кнопку, вы даете согласие на обработку своих персональных данных
                </p>
            </div>
        </div>
    );
}
