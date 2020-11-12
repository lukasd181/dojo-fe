import * as types from "redux/constants/modal.constant";
const initialState = {
    show: null
}

const modalReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case types.OPEN_MODAL:
            console.log("i'm here to change show to TRUE")
            return {...state, show: true};
        case types.CLOSE_MODAL:
            return {...state, show: false};
        default: 
            return {...state};
    }
}

export default modalReducer;