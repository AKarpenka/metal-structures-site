import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import AboutUsBlock from '../../components/about-us/AboutUs';
import TrustUs from '../../components/trust-us/TrustUs';
import ContactUs from '../../components/contact-us/ContactUs';
import Footer from '../../components/footer/Footer';
import './AboutUs.scss';

export default function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <Header />
            <AboutUsBlock />
            <TrustUs />
            <ContactUs />
            <Footer />
        </>
    );

}
