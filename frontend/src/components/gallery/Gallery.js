import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import GridGallery from './grid-gallery/GridGallery';
import {IMAGES, CATEGORIES} from '../../constants/imagesStore';
import { HashLink } from 'react-router-hash-link';

import './Gallery.scss';

export default function Gallery() {
    const navigate = useNavigate();
    const location = useLocation();

    const [typeOfCategory, setTypeOfCategory] = useState(location.pathname.split('/')[2]);
    const [images, setImages] = useState(IMAGES[typeOfCategory]);

    useEffect(() => {
        setImages(IMAGES[typeOfCategory]);
        navigate(`/portfolio/${typeOfCategory}`);
    }, [typeOfCategory]);

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
                        Представляем Вам портфолио наших работ.
                    </p>
                    <div className="gallery-menu">
                        <table>
                            {Object.entries(CATEGORIES).map(([key, value]) => {
                                return (
                                    <tr
                                        key={key}
                                        className={typeOfCategory === key ? 'nav-active' : ''}
                                        onClick={() => setTypeOfCategory(key)}
                                    >
                                        <td>{value.rusName}</td>
                                    </tr>
                                )
                            })}
                        </table>
                        <div className="pictures">
                            <p className="pic-title">{CATEGORIES[typeOfCategory].rusName}</p>
                            {CATEGORIES[typeOfCategory].about &&
                                <p className="pic-more-about">
                                    <HashLink smooth to="#about-anchor">(Узнать больше)</HashLink>
                                </p>
                            }
                            <p className="pic-subtitle">{images.length} фото</p>
                            <GridGallery images={images}/>
                        </div>
                    </div>
                </div>

                <div className='about-container'>
                    <span id='about-anchor'></span>
                    <div className='about-category'>{CATEGORIES[typeOfCategory].about}</div>
                </div>
                
            </div>
        </div>
    );
}
