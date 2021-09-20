/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
    showFence,
    showGate,
    showRailings,
    showGrilles,
    showGreenhouses,
    showVisor,
    showCanopies,
    showStairs,
    showShelves,
    showBillboards,
    showFrames,
    showOther
} from '../../redux/actions/productAction';
import './Gallery.scss';
import GridGallery from '../grid-gallery/GridGallery';
import IMAGES from '../../constants/imagesStore';

class Gallery extends React.Component {
    static typeOfCategory = 'FENCE';

    changeCategory = categoryName => {
        const { state } = useLocation();
        switch (categoryName) {
            case 'FENCE':
                this.props.showFence();
                Gallery.typeOfCategory = 'FENCE';
                console.log(state);
                break;
            case 'GATE':
                this.props.showGate();
                Gallery.typeOfCategory = 'GATE';
                break;
            case 'RAILINGS':
                this.props.showRailings();
                Gallery.typeOfCategory = 'RAILINGS';
                break;
            case 'GRILLES':
                this.props.showGrilles();
                Gallery.typeOfCategory = 'GRILLES';
                break;
            case 'GREENHOUSES':
                this.props.showGreenhouses();
                Gallery.typeOfCategory = 'GREENHOUSES';
                break;
            case 'VISOR':
                this.props.showVisor();
                Gallery.typeOfCategory = 'VISOR';
                break;
            case 'CANOPIES':
                this.props.showCanopies();
                Gallery.typeOfCategory = 'CANOPIES';
                break;
            case 'STAIRS':
                this.props.showStairs();
                Gallery.typeOfCategory = 'STAIRS';
                break;
            case 'SHELVES':
                this.props.showShelves();
                Gallery.typeOfCategory = 'SHELVES';
                break;
            case 'BILLBOARDS':
                this.props.showBillboards();
                Gallery.typeOfCategory = 'BILLBOARDS';
                break;
            case 'FRAMES':
                this.props.showFrames();
                Gallery.typeOfCategory = 'FRAMES';
                break;
            case 'OTHER':
                this.props.showOther();
                Gallery.typeOfCategory = 'OTHER';
                break;
            default:
        }
    };

    render() {
        const { product } = this.props;
        const photos = IMAGES.filter(photo => photo.category === Gallery.typeOfCategory);
        return (
            <div className="gallery-rect">
                <div className="max-width-1090">
                    <div className="corner-header">
                        <div className="corner-left" />
                        <div className="corner-text">
                            <div>ПРОДУКЦИЯ</div>
                        </div>
                    </div>
                    <div className="padding-container">
                        <p>
                            Представляем Вам портфолио с некоторыми нашими работами и их примерными
                            ценами.
                        </p>
                        <div className="gallery-menu">
                            <table>
                                <tr
                                    className={product === 'FENCE' ? 'nav-active' : ''}
                                    onClick={() => this.changeCategory('FENCE')}
                                >
                                    <td>Заборы</td>
                                </tr>
                                <tr
                                    className={product === 'GATE' ? 'nav-active' : ''}
                                    onClick={() => this.changeCategory('GATE')}
                                >
                                    <td>Ворота и калитки</td>
                                </tr>
                                <tr
                                    className={product === 'RAILINGS' ? 'nav-active' : ''}
                                    onClick={() => this.changeCategory('RAILINGS')}
                                >
                                    <td>Перила</td>
                                </tr>
                                <tr
                                    className={product === 'GRILLES' ? 'nav-active' : ''}
                                    onClick={() => this.changeCategory('GRILLES')}
                                >
                                    <td>Решетки</td>
                                </tr>
                                <tr
                                    className={product === 'GREENHOUSES' ? 'nav-active' : ''}
                                    onClick={() => this.changeCategory('GREENHOUSES')}
                                >
                                    <td>Теплицы</td>
                                </tr>
                                <tr
                                    className={product === 'VISOR' ? 'nav-active' : ''}
                                    onClick={() => this.changeCategory('VISOR')}
                                >
                                    <td>Козырьки</td>
                                </tr>
                                <tr
                                    className={product === 'CANOPIES' ? 'nav-active' : ''}
                                    onClick={() => this.changeCategory('CANOPIES')}
                                >
                                    <td>Навесы</td>
                                </tr>
                                <tr
                                    className={product === 'STAIRS' ? 'nav-active' : ''}
                                    onClick={() => this.changeCategory('STAIRS')}
                                >
                                    <td>Лестницы</td>
                                </tr>
                                <tr
                                    className={product === 'SHELVES' ? 'nav-active' : ''}
                                    onClick={() => this.changeCategory('SHELVES')}
                                >
                                    <td>Стеллажи</td>
                                </tr>
                                <tr
                                    className={product === 'BILLBOARDS' ? 'nav-active' : ''}
                                    onClick={() => this.changeCategory('BILLBOARDS')}
                                >
                                    <td>Рекламные билборды</td>
                                </tr>
                                <tr
                                    className={product === 'FRAMES' ? 'nav-active' : ''}
                                    onClick={() => this.changeCategory('FRAMES')}
                                >
                                    <td>Металлические каркасы</td>
                                </tr>
                                <tr
                                    className={product === 'OTHER' ? 'nav-active' : ''}
                                    onClick={() => this.changeCategory('OTHER')}
                                >
                                    <td>Другое</td>
                                </tr>
                            </table>
                            <div className="pictures">
                                <p className="pic-title">Заборы</p>
                                <p className="pic-subtitle">{photos.length} фото</p>
                                <GridGallery photos={photos} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Gallery.propTypes = {
    showFence: PropTypes.func,
    showGate: PropTypes.func,
    showRailings: PropTypes.func,
    showGrilles: PropTypes.func,
    showGreenhouses: PropTypes.func,
    showVisor: PropTypes.func,
    showCanopies: PropTypes.func,
    showStairs: PropTypes.func,
    showShelves: PropTypes.func,
    showBillboards: PropTypes.func,
    showFrames: PropTypes.func,
    showOther: PropTypes.func,
    product: PropTypes.string
};

const mapStateToProps = state => ({
    product: state.product.product
});

const mapDispatchToProps = {
    showFence,
    showGate,
    showRailings,
    showGrilles,
    showGreenhouses,
    showVisor,
    showCanopies,
    showStairs,
    showShelves,
    showBillboards,
    showFrames,
    showOther
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
