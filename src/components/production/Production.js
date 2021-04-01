/* eslint-disable react/self-closing-comp */
import React from 'react';
import ProductCard from '../product-card/ProductCard';
import './Production.scss';

import FenceIcon from '../../assets/images/production/fence.jpg';
import GateIcon from '../../assets/images/production/gate.jpg';
import RailingsIcon from '../../assets/images/production/railings.jpg';
import LatticesIcon from '../../assets/images/production/lattices.jpg';
import GreenhousesIcon from '../../assets/images/production/greenhouses.jpg';
import VisorIcon from '../../assets/images/production/visor.jpg';
import AwningsIcon from '../../assets/images/production/awnings.jpg';
import StairsIcon from '../../assets/images/production/stairs.jpg';
import RacksIcon from '../../assets/images/production/racks.jpg';
import BillboardsIcon from '../../assets/images/production/billboards.jpg';
import FramesIcon from '../../assets/images/production/frames.jpg';

class Production extends React.Component {
    static ololo() {}

    render() {
        return (
            <div className="production-rect">
                <div className="max-width-1090">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <ProductCard name="Заборы" image={FenceIcon} link="" />
                        <ProductCard name="Ворота и калитки" image={GateIcon} link="" />
                        <ProductCard name="Перила" image={RailingsIcon} link="" />
                        <ProductCard name="Решётки" image={LatticesIcon} link="" />
                        <ProductCard name="Теплицы" image={GreenhousesIcon} link="" />
                        <ProductCard name="Козырьки" image={VisorIcon} link="" />
                        <ProductCard name="Навесы" image={AwningsIcon} link="" />
                        <ProductCard name="Лестницы" image={StairsIcon} link="" />
                        <ProductCard name="Стелажи" image={RacksIcon} link="" />
                        <ProductCard name="Рекламные билборды" image={BillboardsIcon} link="" />
                        <ProductCard name="Металлические каркасы" image={FramesIcon} link="" />
                        <ProductCard name="Другое" image="" link="" />
                    </div>
                    <p className="text-right mt-3">
                        <span className="dashed-border-navy font-s-14">
                            СМОТРЕТЬ ВСЮ ПРОДУКЦИЮ
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}
export default Production;
