import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

export default function ProductCard(props) {

    return (
        <div className="product-card">
            <div className="product-card-header font-s-14 ml-3 mb-2">{props.name}</div>
            <img src={props.image} alt="img" />
            <div className="button-position">
                <Link
                    to={{
                        pathname: `/portfolio/${props.link}`,
                        state: { category: props.link }
                    }}
                >
                    <button type="button" className="btn btn-navy">
                        СМОТРЕТЬ
                    </button>
                </Link>
            </div>
            <div>{props.link}</div>
        </div>
    );
}
