import { FETCH_USER, UPDATE_USER_DIALOG, ADD_OR_UPDATE_USER_DATA, RESET_USER_DATA } from '../constants';
import axios from 'axios';

export const fetchUsers = () => (dispatch) => {
    fetch("http://localhost:9000/users")
        .then(res => res.json())
        .then(users =>
            dispatch({
                type: FETCH_USER,
                payload: users
            })
        );
};

export const updateUserDialogState = (data) => (dispatch) => {
    dispatch({
        type: UPDATE_USER_DIALOG,
        payload: data
    });
};

export const addOrUpdateUser = (input) => (dispatch) => {

    axios.post("http://localhost:9000/users", { data: input.data }).then((res) => {
        dispatch({
            type : ADD_OR_UPDATE_USER_DATA,
            payload : {
                data : res.data,
                open : false
            }
        })
    }).catch((error) => {
       
    });
};

export const resetFormData = (data) => (dispatch) => {
    dispatch({
        type: RESET_USER_DATA,
        payload: data
    });
};