import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
} from '../../redux/productSlice';
import GridGallery from '../grid-gallery/GridGallery';
import IMAGES from '../../constants/imagesStore';
import './Gallery.scss';

export default function Gallery() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    // const { state } = useLocation();

    let typeOfCategory = 'FENCE';

    const photos = IMAGES.filter(photo => photo.category === typeOfCategory);

    const changeCategory = categoryName => {   
        switch (categoryName) {
            case 'FENCE':
                dispatch(showFence());
                typeOfCategory = 'FENCE';
                break;
            case 'GATE':
                dispatch(showGate());
                typeOfCategory = 'GATE';
                break;
            case 'RAILINGS':
                dispatch(showRailings());
                typeOfCategory = 'RAILINGS';
                break;
            case 'GRILLES':
                dispatch(showGrilles());
                typeOfCategory = 'GRILLES';
                break;
            case 'GREENHOUSES':
                dispatch(showGreenhouses());
                typeOfCategory = 'GREENHOUSES';
                break;
            case 'VISOR':
                dispatch(showVisor());
                typeOfCategory = 'VISOR';
                break;
            case 'CANOPIES':
                dispatch(showCanopies());
                typeOfCategory = 'CANOPIES';
                break;
            case 'STAIRS':
                dispatch(showStairs());
                typeOfCategory = 'STAIRS';
                break;
            case 'SHELVES':
                dispatch(showShelves());
                typeOfCategory = 'SHELVES';
                break;
            case 'BILLBOARDS':
                dispatch(showBillboards());
                typeOfCategory = 'BILLBOARDS';
                break;
            case 'FRAMES':
                dispatch(showFrames());
                typeOfCategory = 'FRAMES';
                break;
            case 'OTHER':
                dispatch(showOther());
                typeOfCategory = 'OTHER';
                break;
            default:
        }
    };

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
                                className={state.product.product === 'FENCE' ? 'nav-active' : ''}
                                onClick={() => changeCategory('FENCE')}
                            >
                                <td>Заборы</td>
                            </tr>
                            <tr
                                className={state.product.product === 'GATE' ? 'nav-active' : ''}
                                onClick={() => changeCategory('GATE')}
                            >
                                <td>Ворота и калитки</td>
                            </tr>
                            <tr
                                className={state.product.product === 'RAILINGS' ? 'nav-active' : ''}
                                onClick={() => changeCategory('RAILINGS')}
                            >
                                <td>Перила</td>
                            </tr>
                            <tr
                                className={state.product.product === 'GRILLES' ? 'nav-active' : ''}
                                onClick={() => changeCategory('GRILLES')}
                            >
                                <td>Решетки</td>
                            </tr>
                            <tr
                                className={state.product.product === 'GREENHOUSES' ? 'nav-active' : ''}
                                onClick={() => changeCategory('GREENHOUSES')}
                            >
                                <td>Теплицы</td>
                            </tr>
                            <tr
                                className={state.product.product === 'VISOR' ? 'nav-active' : ''}
                                onClick={() => changeCategory('VISOR')}
                            >
                                <td>Козырьки</td>
                            </tr>
                            <tr
                                className={state.product.product === 'CANOPIES' ? 'nav-active' : ''}
                                onClick={() => changeCategory('CANOPIES')}
                            >
                                <td>Навесы</td>
                            </tr>
                            <tr
                                className={state.product.product === 'STAIRS' ? 'nav-active' : ''}
                                onClick={() => changeCategory('STAIRS')}
                            >
                                <td>Лестницы</td>
                            </tr>
                            <tr
                                className={state.product.product === 'SHELVES' ? 'nav-active' : ''}
                                onClick={() => changeCategory('SHELVES')}
                            >
                                <td>Стеллажи</td>
                            </tr>
                            <tr
                                className={state.product.product === 'BILLBOARDS' ? 'nav-active' : ''}
                                onClick={() => changeCategory('BILLBOARDS')}
                            >
                                <td>Рекламные билборды</td>
                            </tr>
                            <tr
                                className={state.product.product === 'FRAMES' ? 'nav-active' : ''}
                                onClick={() => changeCategory('FRAMES')}
                            >
                                <td>Металлические каркасы</td>
                            </tr>
                            <tr
                                className={state.product.product === 'OTHER' ? 'nav-active' : ''}
                                onClick={() => changeCategory('OTHER')}
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
