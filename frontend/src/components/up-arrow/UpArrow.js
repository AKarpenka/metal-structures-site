import React, { useState, useEffect } from 'react';
import './UpArrow.scss';

export default function UpArrow() {
    const [isScrolled, setScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = e => {
        if (window.scrollY === 0) {
            setScrolled(false);
        } else if (window.scrollY > 0) {
            setScrolled(true);
        }
    };

    const goToTop = () => window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    return (
        <div>
            {isScrolled && (
                <div className="up-arrow-background" onClick={goToTop}>
                    <div className="up-arrow">
                        <i className="fa fa-chevron-up" aria-hidden="true" />
                    </div>
                </div>
            )}
        </div>
    );
}
