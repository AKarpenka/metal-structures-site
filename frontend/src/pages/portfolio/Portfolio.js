import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import Gallery from '../../components/gallery/Gallery';
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
            <Footer />
        </>
    );
}
