import React from 'react';
import {
    FenceAbout, 
    GateAbout, 
    RailingsAbout, 
    GrillesAbout,
    GreenhousesAbout,
    VisorAbout,
    CanopiesAbout,
    StairsAbout,
    ShelvesAbout,
    BillboardsAbout,
    FramesAbout,
    OtherAbout,
} from './aboutCategories';

export const CATEGORIES = {
    FENCE: {
        rusName: 'Заборы',
        engName: 'FENCE',
        about: <FenceAbout/>,
    },
    GATE: {
        rusName: 'Ворота и калитки',
        engName: 'GATE',
        about: <GateAbout/>
    },
    RAILINGS: {
        rusName: 'Перила',
        engName: 'RAILINGS',
        about: <RailingsAbout/>,
    },
    GRILLES: {
        rusName: 'Решетки',
        engName: 'GRILLES',
        about: <GrillesAbout/>,
    },
    GREENHOUSES: {
        rusName: 'Теплицы',
        engName: 'GREENHOUSES',
        about: <GreenhousesAbout/>,
    },
    VISOR: {
        rusName: 'Козырьки',
        engName: 'VISOR',
        about: <VisorAbout/>,
    },
    CANOPIES: {
        rusName: 'Навесы',
        engName: 'CANOPIES',
        about: <CanopiesAbout/>,
    },
    STAIRS: {
        rusName: 'Лестницы',
        engName: 'STAIRS',
        about: <StairsAbout/>,
    },
    SHELVES: {
        rusName: 'Стеллажи',
        engName: 'SHELVES',
        about: <ShelvesAbout/>,
    },
    BILLBOARDS: {
        rusName: 'Рекламные билборды',
        engName: 'BILLBOARDS',
        about: <BillboardsAbout/>,
    },
    FRAMES: {
        rusName: 'Металлические каркасы',
        engName: 'FRAMES',
        about: <FramesAbout/>,
    },
    OTHER: {
        rusName: 'Другое',
        engName: 'OTHER',
        about: <OtherAbout/>,
    },
};

export const IMAGES = {
    [CATEGORIES.FENCE.engName]: [
        {
            src: require('../assets/images/portfolio/fence/1.jpg'),
            caption: 'Забор из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/fence/2.jpg'),
            caption: 'Забор из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/fence/3.jpg'),
            caption: 'Забор из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/fence/4.jpg'),
            caption: 'Забор из блабла. Цена: от 1234$',
        },
    ],
    [CATEGORIES.GATE.engName]: [
        {
            src: require('../assets/images/portfolio/gates/1.jpg'),
            caption: 'Ворота из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/gates/2.jpg'),
            caption: 'Ворота из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/gates/3.jpg'),
            caption: 'Ворота из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/gates/4.jpg'),
            caption: 'Ворота из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/gates/5.jpg'),
            caption: 'Ворота из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/gates/6.jpg'),
            caption: 'Ворота из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/gates/7.jpg'),
            caption: 'Ворота из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/gates/8.jpg'),
            caption: 'Ворота из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/gates/9.jpg'),
            caption: 'Ворота из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/gates/10.jpg'),
            caption: 'Ворота из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/gates/11.jpg'),
            caption: 'Ворота из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/gates/12.jpg'),
            caption: 'Ворота из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/gates/13.jpg'),
            caption: 'Ворота из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/gates/14.jpg'),
            caption: 'Ворота из блабла. Цена: от 1234$',
        },
    ],
    [CATEGORIES.RAILINGS.engName]: [
        {
            src: require('../assets/images/portfolio/railing/1.jpg'),
            caption: 'Перила из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/railing/2.jpg'),
            caption: 'Перила из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/railing/3.jpg'),
            caption: 'Перила из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/railing/4.jpg'),
            caption: 'Перила из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/railing/5.jpg'),
            caption: 'Перила из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/railing/6.jpg'),
            caption: 'Перила из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/railing/7.jpg'),
            caption: 'Перила из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/railing/8.jpg'),
            caption: 'Перила из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/railing/9.jpg'),
            caption: 'Перила из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/railing/10.jpg'),
            caption: 'Перила из блабла. Цена: от 1234$',
        },
    ],
    [CATEGORIES.GRILLES.engName]: [
        {
            src: require('../assets/images/portfolio/grill/1.jpg'),
            caption: 'Решетки из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/grill/2.jpg'),
            caption: 'Решетки из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/grill/3.jpg'),
            caption: 'Решетки из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/grill/4.jpg'),
            caption: 'Решетки из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/grill/5.jpg'),
            caption: 'Решетки из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/grill/6.jpg'),
            caption: 'Решетки из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/grill/7.jpg'),
            caption: 'Решетки из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/grill/8.jpg'),
            caption: 'Решетки из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/grill/9.jpg'),
            caption: 'Решетки из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/grill/10.jpg'),
            caption: 'Решетки из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/grill/11.jpg'),
            caption: 'Решетки из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/grill/12.jpg'),
            caption: 'Решетки из блабла. Цена: от 1234$',
        },
    ],
    [CATEGORIES.GREENHOUSES.engName]: [
        {
            src: require('../assets/images/portfolio/greenhouse/1.jpg'),
            caption: 'Телица из блабла. Цена: от 1234$',
        },
    ],
    [CATEGORIES.VISOR.engName]: [
        {
            src: require('../assets/images/portfolio/visor/1.jpg'),
            caption: 'Козырек из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/visor/2.jpg'),
            caption: 'Козырек из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/visor/3.jpg'),
            caption: 'Козырек из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/visor/4.jpg'),
            caption: 'Козырек из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/visor/5.jpg'),
            caption: 'Козырек из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/visor/6.jpg'),
            caption: 'Козырек из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/visor/7.jpg'),
            caption: 'Козырек из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/visor/8.jpg'),
            caption: 'Козырек из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/visor/9.jpg'),
            caption: 'Козырек из блабла. Цена: от 1234$',
        },
    ],
    [CATEGORIES.CANOPIES.engName]: [
        {
            src: require('../assets/images/portfolio/canopy/1.jpg'),
            caption: 'Навес из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/canopy/2.jpg'),
            caption: 'Навес из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/canopy/3.jpg'),
            caption: 'Навес из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/canopy/4.jpg'),
            caption: 'Навес из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/canopy/5.jpg'),
            caption: 'Навес из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/canopy/6.jpg'),
            caption: 'Навес из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/canopy/7.jpg'),
            caption: 'Навес из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/canopy/8.jpg'),
            caption: 'Навес из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/canopy/9.jpg'),
            caption: 'Навес из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/canopy/10.jpg'),
            caption: 'Навес из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/canopy/11.jpg'),
            caption: 'Навес из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/canopy/12.jpg'),
            caption: 'Навес из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/canopy/13.jpg'),
            caption: 'Навес из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/canopy/14.jpg'),
            caption: 'Навес из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/canopy/15.jpg'),
            caption: 'Навес из блабла. Цена: от 1234$',
        },
    ],
    [CATEGORIES.STAIRS.engName]: [
        {
            src: require('../assets/images/portfolio/stair/1.jpg'),
            caption: 'Лестница из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/stair/2.jpg'),
            caption: 'Лестница из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/stair/3.jpg'),
            caption: 'Лестница из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/stair/4.jpg'),
            caption: 'Лестница из блабла. Цена: от 1234$',
        },
    ],
    [CATEGORIES.SHELVES.engName]: [
        {
            src: require('../assets/images/portfolio/shelve/1.jpg'),
            caption: 'Стеллаж из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/shelve/2.jpg'),
            caption: 'Стеллаж из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/shelve/3.jpg'),
            caption: 'Стеллаж из блабла. Цена: от 1234$',
        },
    ],
    [CATEGORIES.BILLBOARDS.engName]: [
        {
            src: require('../assets/images/portfolio/billboards/1.jpg'),
            caption: 'Биллборд из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/billboards/2.jpg'),
            caption: 'Биллборд из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/billboards/3.jpg'),
            caption: 'Биллборд из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/billboards/4.jpg'),
            caption: 'Биллборд из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/billboards/5.jpg'),
            caption: 'Биллборд из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/billboards/6.jpg'),
            caption: 'Биллборд из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/billboards/7.jpg'),
            caption: 'Биллборд из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/billboards/8.jpg'),
            caption: 'Биллборд из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/billboards/9.jpg'),
            caption: 'Биллборд из блабла. Цена: от 1234$',
        },
    ],
    [CATEGORIES.FRAMES.engName]: [
        {
            src: require('../assets/images/portfolio/frames/1.jpg'),
            caption: 'Решетка из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/frames/2.jpg'),
            caption: 'Решетка из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/frames/3.jpg'),
            caption: 'Решетка из блабла. Цена: от 1234$',
        },
    ],
    [CATEGORIES.OTHER.engName]: [
        {
            src: require('../assets/images/portfolio/others/1.jpg'),
            caption: 'Другое из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/others/2.jpg'),
            caption: 'Другое из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/others/3.jpg'),
            caption: 'Другое из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/others/4.jpg'),
            caption: 'Другое из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/others/5.jpg'),
            caption: 'Другое из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/others/6.jpg'),
            caption: 'Другое из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/others/7.jpg'),
            caption: 'Другое из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/others/8.jpg'),
            caption: 'Другое из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/others/9.jpg'),
            caption: 'Другое из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/others/10.jpg'),
            caption: 'Другое из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/others/11.jpg'),
            caption: 'Другое из блабла. Цена: от 1234$',
        },
        {
            src: require('../assets/images/portfolio/others/12.jpg'),
            caption: 'Другое из блабла. Цена: от 1234$',
        },
    ]
};

