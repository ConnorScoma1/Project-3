import axios from 'axios';
import { returnErrors } from './errorActions';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

// Check Token
export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });



    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
}       

// Register 
export const register = ({name, email, password}) => dispatch => {
    const config = {
        // Headers
        header: {
            'Content-Type': 'application/json'
        }
    }
    // Request Body
    const body = JSON.stringify({ name, email, password })

    axios.post('/api/users', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

// Set Config

export const tokenConfig = getState => {
        // Get Token
        const token = getState().auth.token;

        // Header
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
    
        if(token) {
            config.headers['x-auth-token'] = token;
        }
    return config
}