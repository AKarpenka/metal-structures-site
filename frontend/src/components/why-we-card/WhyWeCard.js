/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import './WhyWeCard.scss';

class WhyWeCard extends React.Component {
    render() {
        const { icon, text } = this.props;
        return (
            <div className="why-we-card">
                <div className="circle">
                    <img src={icon} alt="img" />
                </div>
                <p>{text}</p>
            </div>
        );
    }
}

WhyWeCard.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string
};

export default WhyWeCard;
