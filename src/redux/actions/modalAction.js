import { SHOW_CALL_MODAL, HIDE_CALL_MODAL } from './types';

export const showCallModal = () => ({ type: SHOW_CALL_MODAL, payload: {} });
export const hideCallModal = () => ({ type: HIDE_CALL_MODAL, payload: {} });
