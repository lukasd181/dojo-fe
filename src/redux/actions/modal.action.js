import api from "redux/api";
import { toast } from "react-toastify";
import * as types from "redux/constants/modal.constant"

const handleOpenModal = () => (dispatch) => {
    dispatch({type: types.OPEN_MODAL, payload: true})
}

const handleCloseModal = () => (dispatch) => {
    dispatch({type: types.CLOSE_MODAL, payload: false})
}

export const modalAction = {
    handleOpenModal,
    handleCloseModal
}