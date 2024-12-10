import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import ContactsBlock from '../../components/contacts/Contacts';
import Footer from '../../components/footer/Footer';
import './Contacts.scss';

export default function Contacts() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <Header />
            <ContactsBlock />
            <Footer />
        </>
    );
}
