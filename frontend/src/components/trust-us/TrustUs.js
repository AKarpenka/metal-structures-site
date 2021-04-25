import React from 'react';
import Carousel from 'react-multi-carousel';
import Farmaciya from '../../assets/images/clients/farmaciya.png';
import FavApteka from '../../assets/images/clients/fav_apteka.png';
import PolyVet from '../../assets/images/clients/poly_vet.png';
import SelHoz from '../../assets/images/clients/sel_hoz.png';
import Sugar from '../../assets/images/clients/sugar.png';
import './TrustUs.scss';

class TrustUs extends React.Component {
    render() {
        const images = [Farmaciya, FavApteka, PolyVet, SelHoz, Sugar];

        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 3
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 2
            }
        };
        const CustomLeftArrow = ({ onClick }) => (
            <div className="arrow-background-left" onClick={() => onClick()}>
                <i className="custom-left-arrow" />
            </div>
        );
        const CustomRightArrow = ({ onClick }) => (
            <div className="arrow-background-right" onClick={() => onClick()}>
                <i className="custom-right-arrow" />
            </div>
        );

        const fakerData = Array(5)
            .fill(0)
            .map((item, index) => {
                return {
                    image: images[index]
                };
            });
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
                    <div className="carousel">
                        <Carousel
                            responsive={responsive}
                            infinite
                            customRightArrow={<CustomRightArrow />}
                            customLeftArrow={<CustomLeftArrow />}
                        >
                            {fakerData.map(card => {
                                return <img className="img-style" src={card.image} alt="img" />;
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrustUs;
