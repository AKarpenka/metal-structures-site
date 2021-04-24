/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './TrustUs.scss';

class TrustUs extends React.Component {
    render() {
        return (
            <div className="trust-us-rect">
                <div className="max-width-1090">
                    <div className="corner-header">
                        <div className="corner-left" />
                        <div className="corner-text">
                            <div>НАМ ДОВЕРЯЮТ</div>
                            <div>ПАРТНЕРЫ</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrustUs;
