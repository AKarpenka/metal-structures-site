/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

class Gallery extends React.Component {
    changeCategory = category => {
        switch (category) {
            case 'FENCE':
                this.props.showFence();
                break;
            case 'GATE':
                this.props.showGate();
                break;
            case 'RAILINGS':
                this.props.showRailings();
                break;
            case 'GRILLES':
                this.props.showGrilles();
                break;
            case 'GREENHOUSES':
                this.props.showGreenhouses();
                break;
            case 'VISOR':
                this.props.showVisor();
                break;
            case 'CANOPIES':
                this.props.showCanopies();
                break;
            case 'STAIRS':
                this.props.showStairs();
                break;
            case 'SHELVES':
                this.props.showShelves();
                break;
            case 'BILLBOARDS':
                this.props.showBillboards();
                break;
            case 'FRAMES':
                this.props.showFrames();
                break;
            case 'OTHER':
                this.props.showOther();
                break;
            default:
        }
    };

    render() {
        const { product } = this.props;
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
                                <p>fdfdfsfd</p>
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
