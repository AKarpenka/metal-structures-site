/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import './WhyWeCard.scss';

export default function WhyWeCard(props) {

    return (
        <div className="why-we-card">
            <div className="circle">
                <img src={props.icon} alt="img" />
            </div>
            <p>{props.text}</p>
        </div>
    );
}
