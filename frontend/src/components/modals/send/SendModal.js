import React, { useState } from 'react';
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


export default function SendModal() {
    const [username, setUsername] = useState('');
    const [telephone, setTelephone] = useState('');
    const [message, setMessage] = useState('');
    const [files, setFile] = useState([]);
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
        if (!!username && !!telephone && !!files) {
            dispatch(sendDesign({ username, telephone, message, files }));
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
                        <button type="submit" className="btn btn-navy">
                            {state.request.sending ? <Spinner /> : 'ОТПРАВИТЬ'}
                        </button>
                    </fieldset>
                </form>
            </div>
            <p className="footer-modal font-s-12 text-center">
                Нажимая на кнопку, вы даете согласие на обработку своих персональных данных
            </p>
        </div>
    );
}
