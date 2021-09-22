import React from 'react';
import { useDispatch } from 'react-redux';
import { showSendModal } from '../../redux/modalSlice';
import Drawing from '../../assets/images/chertez.png';
import './SendUs.scss';

export default function SendUs() {
    const dispatch = useDispatch();

    return (
        <div className="send-us-rect">
            <div className="max-width-1090">
                <img src={Drawing} alt="img" />
                <div className="corner-header text-right">
                    <div className="corner-right" />
                    <div className="corner-text">
                        <div>ЕСТЬ ЧЕРТЕЖ?</div>
                        <div>ОТПРАВЬТЕ ЕГО НА РАСЧЕТ</div>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => dispatch(showSendModal())}
                        >
                            ОТПРАВИТЬ ЧЕРТЁЖ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
