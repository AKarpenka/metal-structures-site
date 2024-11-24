import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import GridGallery from '../grid-gallery/GridGallery';
import IMAGES from '../../constants/imagesStore';
import './Gallery.scss';

export default function Gallery() {
    const [typeOfCategory, setTypeOfCategory] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (typeOfCategory === '') {
            setTypeOfCategory(location.pathname.split('/')[2]);
            navigate(`/portfolio/${location.pathname.split('/')[2]}`);
        } else {
            navigate(`/portfolio/${typeOfCategory}`);
        }
    }, [typeOfCategory]);


    const photos = IMAGES.filter(photo => photo.category === typeOfCategory);

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
                        Представляем Вам портфолио с некоторыми нашими работами и их ценами.
                    </p>
                    <div className="gallery-menu">
                        <table>
                            <tr
                                className={typeOfCategory === 'FENCE' ? 'nav-active' : ''}
                                onClick={() => setTypeOfCategory('FENCE')}
                            >
                                <td>Заборы</td>
                            </tr>
                            <tr
                                className={typeOfCategory === 'GATE' ? 'nav-active' : ''}
                                onClick={() => setTypeOfCategory('GATE')}
                            >
                                <td>Ворота и калитки</td>
                            </tr>
                            <tr
                                className={typeOfCategory === 'RAILINGS' ? 'nav-active' : ''}
                                onClick={() => setTypeOfCategory('RAILINGS')}
                            >
                                <td>Перила</td>
                            </tr>
                            <tr
                                className={typeOfCategory === 'GRILLES' ? 'nav-active' : ''}
                                onClick={() => setTypeOfCategory('GRILLES')}
                            >
                                <td>Решетки</td>
                            </tr>
                            <tr
                                className={typeOfCategory === 'GREENHOUSES' ? 'nav-active' : ''}
                                onClick={() => setTypeOfCategory('GREENHOUSES')}
                            >
                                <td>Теплицы</td>
                            </tr>
                            <tr
                                className={typeOfCategory === 'VISOR' ? 'nav-active' : ''}
                                onClick={() => setTypeOfCategory('VISOR')}
                            >
                                <td>Козырьки</td>
                            </tr>
                            <tr
                                className={typeOfCategory === 'CANOPIES' ? 'nav-active' : ''}
                                onClick={() => setTypeOfCategory('CANOPIES')}
                            >
                                <td>Навесы</td>
                            </tr>
                            <tr
                                className={typeOfCategory === 'STAIRS' ? 'nav-active' : ''}
                                onClick={() => setTypeOfCategory('STAIRS')}
                            >
                                <td>Лестницы</td>
                            </tr>
                            <tr
                                className={typeOfCategory === 'SHELVES' ? 'nav-active' : ''}
                                onClick={() => setTypeOfCategory('SHELVES')}
                            >
                                <td>Стеллажи</td>
                            </tr>
                            <tr
                                className={typeOfCategory === 'BILLBOARDS' ? 'nav-active' : ''}
                                onClick={() => setTypeOfCategory('BILLBOARDS')}
                            >
                                <td>Рекламные билборды</td>
                            </tr>
                            <tr
                                className={typeOfCategory === 'FRAMES' ? 'nav-active' : ''}
                                onClick={() => setTypeOfCategory('FRAMES')}
                            >
                                <td>Металлические каркасы</td>
                            </tr>
                            <tr
                                className={typeOfCategory === 'OTHER' ? 'nav-active' : ''}
                                onClick={() => setTypeOfCategory('OTHER')}
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
