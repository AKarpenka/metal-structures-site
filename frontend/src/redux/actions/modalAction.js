import { SHOW_CALL_MODAL, HIDE_CALL_MODAL, SHOW_SEND_MODAL, HIDE_SEND_MODAL } from './types';

export const showCallModal = () => ({ type: SHOW_CALL_MODAL, payload: {} });
export const hideCallModal = () => ({ type: HIDE_CALL_MODAL, payload: {} });
export const showSendModal = () => ({ type: SHOW_SEND_MODAL, payload: {} });
export const hideSendModal = () => ({ type: HIDE_SEND_MODAL, payload: {} });
