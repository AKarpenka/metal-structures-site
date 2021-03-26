import React from 'react';
import './ContactUs.scss';

class ContactUs extends React.Component {
    sendData = () => {};

    render() {
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
                    <div className="fields">
                        <div>
                            <input type="text" placeholder="Ваше имя *" required />
                        </div>
                        <div className="field">
                            <textarea placeholder="Ваше сообщение" />
                        </div>
                        <div>
                            <input type="text" placeholder="Ваш телефон *" required />
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.sendData}>
                        ОТПРАВИТЬ
                    </button>
                    <p className="footer-modal font-s-11">
                        Нажимая на кнопку, вы даете согласие на обработку своих персональных данных
                    </p>
                </div>
            </div>
        );
    }
}

export default ContactUs;
