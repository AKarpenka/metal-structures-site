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
} from './types';

export const showFence = () => ({ type: FENCE, payload: {} });
export const showGate = () => ({ type: GATE, payload: {} });
export const showRailings = () => ({ type: RAILINGS, payload: {} });
export const showGrilles = () => ({ type: GRILLES, payload: {} });
export const showGreenhouses = () => ({ type: GREENHOUSES, payload: {} });
export const showVisor = () => ({ type: VISOR, payload: {} });
export const showCanopies = () => ({ type: CANOPIES, payload: {} });
export const showStairs = () => ({ type: STAIRS, payload: {} });
export const showShelves = () => ({ type: SHELVES, payload: {} });
export const showBillboards = () => ({ type: BILLBOARDS, payload: {} });
export const showFrames = () => ({ type: FRAMES, payload: {} });
export const showOther = () => ({ type: OTHER, payload: {} });
