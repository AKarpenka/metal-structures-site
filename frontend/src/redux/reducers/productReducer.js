import {
    FENCE,
    GATE,
    RAILINGS,
    GRILLES,
    GREENHOUSES,
    VISOR,
    CANOPIES,
    STAIRS,
    SHELVES,
    BILLBOARDS,
    FRAMES,
    OTHER
} from '../actions/types';

const product = (state = { product: 'FENCE' }, action) => {
    switch (action.type) {
        case FENCE:
            return {
                ...state,
                product: 'FENCE'
            };
        case GATE:
            return {
                ...state,
                product: 'GATE'
            };
        case RAILINGS:
            return {
                ...state,
                product: 'RAILINGS'
            };
        case GRILLES:
            return {
                ...state,
                product: 'GRILLES'
            };
        case GREENHOUSES:
            return {
                ...state,
                product: 'GREENHOUSES'
            };
        case VISOR:
            return {
                ...state,
                product: 'VISOR'
            };
        case CANOPIES:
            return {
                ...state,
                product: 'CANOPIES'
            };
        case STAIRS:
            return {
                ...state,
                product: 'STAIRS'
            };
        case SHELVES:
            return {
                ...state,
                product: 'SHELVES'
            };
        case BILLBOARDS:
            return {
                ...state,
                product: 'BILLBOARDS'
            };
        case FRAMES:
            return {
                ...state,
                product: 'FRAMES'
            };
        case OTHER:
            return {
                ...state,
                product: 'OTHER'
            };
        default:
            return state;
    }
};

export default {
    product
};
