import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AboutUsHeader from '../../components/about-us-header/AboutUsHeader';
import Header from '../../components/header/Header';
import Production from '../../components/production/Production';
import CallModal from '../../components/modals/call/CallModal';
import SendModal from '../../components/modals/send/SendModal';
import HowWeWork from '../../components/how-we-work/HowWeWork';
import WhyWe from '../../components/why-we/WhyWe';
import TrustUs from '../../components/trust-us/TrustUs';
import SendUs from '../../components/send-us/SendUs';
import ContactUs from '../../components/contact-us/ContactUs';
import Footer from '../../components/footer/Footer';
import './Main.scss';

export default function Main() {
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
            <div className="header-image">
                <div className="blue-trans-rect" />
                <AboutUsHeader />
            </div>
            <Production />
            <HowWeWork />
            <WhyWe />
            <TrustUs />
            <SendUs />
            <ContactUs />
            <Footer />
        </div>
    );
}
