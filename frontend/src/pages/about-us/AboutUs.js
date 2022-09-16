import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import CallModal from '../../components/modals/call/CallModal';
import SendModal from '../../components/modals/send/SendModal';
import AboutUsBlock from '../../components/about-us/AboutUs';
import TrustUs from '../../components/trust-us/TrustUs';
import ContactUs from '../../components/contact-us/ContactUs';
import Footer from '../../components/footer/Footer';
import './AboutUs.scss';

export default function AboutUs() {
    const state = useSelector((state) => state);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Header />
            {state.modal.isShownCallPopup && <CallModal />}
            {state.modal.isShownSendPopup && <SendModal />}
            <div className={state.modal.isShownCallPopup || state.modal.isShownSendPopup ? 'overlay' : ''} />
            <AboutUsBlock />
            <TrustUs />
            <ContactUs />
            <Footer />
        </div>
    );

}
