import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import CallModal from '../../components/modals/call/CallModal';
import SendModal from '../../components/modals/send/SendModal';
import ContactsBlock from '../../components/contacts/Contacts';
import SendUs from '../../components/send-us/SendUs';
import ContactUs from '../../components/contact-us/ContactUs';
import Footer from '../../components/footer/Footer';
import './Contacts.scss';

export default function Contacts() {
    const state = useSelector((state) => state);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Header />
            {state.modal.isShownCallPopup ? <CallModal /> : <div />}
            {state.modal.isShownSendPopup ? <SendModal /> : <div />}
            <div className={state.modal.isShownCallPopup || state.modal.isShownSendPopup ? 'overlay' : ''} />
            <ContactsBlock />
            <SendUs />
            <ContactUs />
            <Footer />
        </div>
    );
}
