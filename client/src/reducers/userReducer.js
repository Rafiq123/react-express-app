import { FETCH_USER, UPDATE_USER_DIALOG, ADD_OR_UPDATE_USER_DATA, RESET_USER_DATA } from '../constants';

const initialState = {
    items: [],
    item: {},
    open: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                items: action.payload
            }
        case UPDATE_USER_DIALOG:
            return {
                ...state,
                open: action.payload
            }
        case ADD_OR_UPDATE_USER_DATA:
            return {
                ...state,
                item: action.payload.data,
                open: action.payload.open
            }
        case RESET_USER_DATA:
            return {
                ...state,
                item : action.payload
            }
        default:
            return state;
    }
}

