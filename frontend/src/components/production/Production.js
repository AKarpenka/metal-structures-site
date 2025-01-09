import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/ProductCard';
import { CATEGORIES } from '../../constants/imagesStore';

import './Production.scss';

export default function Production() {
    const navigate = useNavigate();

    return (
        <div className="production-rect">
            <div className="max-width-1090">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    {
                        Object.entries(CATEGORIES).map(([key, value]) => {
                            return (
                                <ProductCard
                                    key={value.engName}
                                    name={value.rusName}
                                    image={value.image}
                                    link={key}
                                />
                            )
                        })
                    }
                </div>
                <p className="text-right mt-3">
                    <span
                        className="dashed-border-navy font-s-14"
                        onClick={() => navigate('/portfolio/FENCE')}
                    >
                        СМОТРЕТЬ ВСЮ ПРОДУКЦИЮ
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                    </span>
                </p>
            </div>
        </div>
    );
}
