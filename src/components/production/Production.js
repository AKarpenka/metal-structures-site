import React from 'react';
import ProductCard from '../product-card/ProductCard';
import './Production.scss';

import FenceIcon from '../../assets/images/fence.jpg';

class Production extends React.Component {
    static ololo() {}

    render() {
        return (
            <div className="production-rect">
                <div className="max-width-1100">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <ProductCard name="Заборы" image={FenceIcon} link="" />
                        <ProductCard name="Заборы" image={FenceIcon} link="" />
                        <ProductCard name="Заборы" image={FenceIcon} link="" />
                        <ProductCard name="Заборы" image={FenceIcon} link="" />
                        <ProductCard name="Заборы" image={FenceIcon} link="" />
                        <ProductCard name="Заборы" image={FenceIcon} link="" />
                        <ProductCard name="Заборы" image={FenceIcon} link="" />
                        <ProductCard name="Заборы" image={FenceIcon} link="" />
                        <ProductCard name="Заборы" image={FenceIcon} link="" />
                        <ProductCard name="Заборы" image={FenceIcon} link="" />
                        <ProductCard name="Заборы" image={FenceIcon} link="" />
                        <ProductCard name="Заборы" image={FenceIcon} link="" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Production;
