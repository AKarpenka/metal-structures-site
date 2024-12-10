import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import Gallery from '../../components/gallery/Gallery';
import SendUs from '../../components/send-us/SendUs';
import ContactUs from '../../components/contact-us/ContactUs';
import Footer from '../../components/footer/Footer';
import './Portfolio.scss';

export default function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <Header />
            <Gallery />
            <SendUs />
            <ContactUs />
            <Footer />
        </>
    );
}
