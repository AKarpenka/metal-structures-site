import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideCallModal, hideSendModal } from '../../redux/modalSlice';
import Header from '../../components/header/Header';
import CallModal from '../../components/modals/call/CallModal';
import SendModal from '../../components/modals/send/SendModal';
import Gallery from '../../components/gallery/Gallery';
import SendUs from '../../components/send-us/SendUs';
import ContactUs from '../../components/contact-us/ContactUs';
import Footer from '../../components/footer/Footer';
import './Portfolio.scss';

export default function Portfolio() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const hideModalWindow = () => {
        dispatch(hideCallModal());
        dispatch(hideSendModal());
    };

    return (
        <div>
            <Header />
            {state.modal.isShownCallPopup && <CallModal />}
            {state.modal.isShownSendPopup && <SendModal />}
            <div
                className={state.modal.isShownCallPopup || state.modal.isShownSendPopup ? 'overlay' : ''}
                onClick={hideModalWindow}
            />
            <Gallery />
            <SendUs />
            <ContactUs />
            <Footer />
        </div>
    );
}
