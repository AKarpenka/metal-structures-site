import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product: 'FENCE'
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        showFence: (state, action) => {
            state.product = 'FENCE';
        },
        showGate: (state, action) => {
            state.product = 'GATE';
        },
        showRailings: (state, action) => {
            state.product = 'RAILINGS';
        },
        showGrilles: (state, action) => {
            state.product = 'GRILLES';
        },
        showGreenhouses: (state, action) => {
            state.product = 'GREENHOUSES';
        },
        showVisor: (state, action) => {
            state.product = 'VISOR';
        },
        showCanopies: (state, action) => {
            state.product = 'CANOPIES';
        },
        showStairs: (state, action) => {
            state.product = 'STAIRS';
        },
        showShelves: (state, action) => {
            state.product = 'SHELVES';
        },
        showBillboards: (state, action) => {
            state.product = 'BILLBOARDS';
        },
        showFrames: (state, action) => {
            state.product = 'FRAMES';
        },
        showOther: (state, action) => {
            state.product = 'OTHER';
        },
    },
});

export const {
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
} = productSlice.actions;

export default productSlice.reducer;
