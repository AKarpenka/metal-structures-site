import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendDesign } from '../../../redux/requestSlice';
import { hideSendModal } from '../../../redux/modalSlice';
import Spinner from '../../spinner/Spinner';
import './SendModal.scss';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import { getDroppedOrSelectedFiles } from 'html5-file-selector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import InputMask from 'react-input-mask';


export default function SendModal() {

    const [userName, setUsername] = useState('');
    const [userNameDirty, setUserNameDirty] = useState(false);
    const [userNameError, setUserNameError] = useState('Заполните, пожалуйста, обязательное поле');
    const [telephone, setTelephone] = useState('');
    const [telephoneDirty, setTelephoneDirty] = useState(false);
    const [message, setMessage] = useState('');
    const [formValid, setFormValid] = useState(false);

    const [files, setFile] = useState([]);
    const state = useSelector((state) => state);
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
        if (!!userName && !!telephone && !!files) {
            dispatch(sendDesign({ userName, telephone, message, files }));
        }
    };

    const onFileChange = ({ meta, file }, status) => { 
        if (status == 'done') {
            files.push(file);
            setFile(files);
        } else if (status == 'removed') {
            files
            const indexOfObject = files.findIndex(obj => {
                return obj.name === file.name;
              });
            files.splice(indexOfObject, 1);
            setFile(files);
        }
    }

    const getFilesFromEvent = e => {
        return new Promise(resolve => {
            getDroppedOrSelectedFiles(e).then(chosenFiles => {
                resolve(chosenFiles.map(f => f.fileObject))
            })
        })
    }
    const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
        const textMsg = files.length > 0 ? 'Выбрать еще файлы' : 'Выберите файлы';
        return (
            <div>
            {files.length <= 0 && 
                <div className="title-dnd">
                    <FontAwesomeIcon icon={faFolderOpen} className="icon" />
                    <p>Переметите сюда файлы <br/> (до 10мб, до 5 файлов)</p>
                    <div className="title-dnd-or">
                        <div className="line"></div>
                        <p> ИЛИ </p>
                        <div className="line"></div>
                    </div>
                </div>
            }
                <label className="btn btn-files">
                    {textMsg}
                    <input
                        style={{ display: 'none' }}
                        type="file"
                        accept={accept}
                        multiple
                        onChange={e => {
                            getFilesFromEvent(e).then(chosenFiles => {
                                onFiles(chosenFiles)
                            })
                        }}
                    />
                </label>
            </div>
        )
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
                        <div className="upload-button">
                            <Dropzone
                                onChangeStatus={onFileChange}
                                InputComponent={selectFileInput}
                                getFilesFromEvent={getFilesFromEvent}
                                accept="image/*,application/*"
                                maxFiles={5}
                                maxSizeBytes={10485760}
                                inputContent="Перемести сюда файлы"
                                styles={{
                                    dropzone: { width: 'calc(100% - 42px)', 
                                                height: 220,
                                                marginTop: '45px', 
                                                padding: '20px',
                                                overflow: 'auto',
                                                border: '1px dashed rgba(22, 45, 89, 0.3)',
                                                borderRadius: 0, 
                                                backgroundColor: '#F2F2F2',
                                                boxShadow: '0 0 0 20px #FFFFFF, 0 0 0 21px rgba(22, 45, 89, 50%)',
                                                boxSizing: 'border-box',
                                            },
                                    dropzoneActive: { borderColor: 'green' },
                                }}       
                            />
                        </div>
                        <button type="submit" disabled={!formValid} className="btn btn-navy">
                            {state.request.sending ? <Spinner /> : 'ОТПРАВИТЬ'}
                        </button>
                        <p className="footer-modal font-s-12 text-center">
                            Нажимая на кнопку, вы даете согласие на обработку своих персональных данных
                        </p>
                    </fieldset>
                </form>
            </div>
            
        </div>
    );
}
