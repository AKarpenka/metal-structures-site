import React from 'react';
import './ProductCard.scss';

class ProductCard extends React.Component {
    static ololo() {}

    render() {
        const { name, image, link } = this.props;
        return (
            <div className="product-card">
                <div className="product-card-header ml-3 mb-2">{name}</div>
                <img src={image} width="250" height="222" alt="img" />
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
    name: ProductCard.string,
    image: ProductCard.string,
    link: ProductCard.string
};

export default ProductCard;
