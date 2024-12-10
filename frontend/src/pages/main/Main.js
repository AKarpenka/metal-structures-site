import React, { useEffect } from 'react';
import AboutUsHeader from '../../components/about-us-header/AboutUsHeader';
import Header from '../../components/header/Header';
import Production from '../../components/production/Production';
import HowWeWork from '../../components/how-we-work/HowWeWork';
import WhyWe from '../../components/why-we/WhyWe';
import TrustUs from '../../components/trust-us/TrustUs';
import Footer from '../../components/footer/Footer';
import './Main.scss';

export default function Main() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <Header />
            <div className="header-image">
                <div className="blue-trans-rect" />
                <AboutUsHeader />
            </div>
            <Production />
            <HowWeWork />
            <WhyWe />
            <TrustUs />
            <Footer />
        </>
    );
}
