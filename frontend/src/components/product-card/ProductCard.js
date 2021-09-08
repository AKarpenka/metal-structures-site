/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.scss';

class ProductCard extends React.Component {
    render() {
        const { name, image, link } = this.props;
        return (
            <div className="product-card">
                <div className="product-card-header font-s-14 ml-3 mb-2">{name}</div>
                <img src={image} alt="img" />
                <div className="button-position">
                    <button type="button" className="btn btn-navy">
                        СМОТРЕТЬ
                    </button>
                </div>
                <div>{link}</div>
            </div>
        );
    }
}

ProductCard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string
};

export default ProductCard;
