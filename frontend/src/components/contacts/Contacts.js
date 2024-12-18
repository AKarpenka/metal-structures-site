import React from 'react';
import './Contacts.scss';

export default function Contacts() {

    return (
        <div className="contacts-rect">
            <div className="max-width-1090">
                <div className="corner-header">
                    <div className="corner-left" />
                    <div className="corner-text">
                        <div>КОНТАКТЫ</div>
                    </div>
                </div>
                <div className="margin-bottom-20 font-s-16">
                    <p>
                        <b>A1:</b> +375 (29) 125-28-81
                    </p>
                    <p>
                        <b>MTS:</b> +375 (29) 238-19-29
                    </p>
                    <p>Ежедневно с 8:00 до 20:00</p>
                </div>
                <div className="margin-bottom-20 font-s-16">
                    <p>
                        <b>e-mail:</b> karko73@mail.ru
                    </p>
                </div>
                <div className="font-s-16">
                    <p>ИП Карпенко Г.Н.</p>
                    <p>УНП 490545970</p>
                </div>
            </div>
        </div>
    );
}
