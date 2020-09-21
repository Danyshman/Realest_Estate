import { setAlert } from './alert';
import { SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SET_ALERT } from './actionTypes';
import axios from '../common/axiosConfig';

export const login = (email, password) => async (dispatch) => {
    const body = JSON.stringify({ email, password });
    try {
        const res = await axios.post('/api/token/', (body));
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
        dispatch({
            type: SET_ALERT,
            payload: setAlert('Authenticated successfully', 'success'),
        });
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
        });
        dispatch({
            type: SET_ALERT,
            payload: setAlert('Authenticating failed', 'error'),
        });
    }
};

export const signup = ({ name, email, password, password2 }) => async (dispatch) => {
    const body = JSON.stringify({ name, email, password, password2 });
    try {
        const res = await axios.post('/api/accounts/signup', (body));
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data,
        });
        dispatch(login(email, password));
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL,
        });
        dispatch({
            type: SET_ALERT,
            payload: setAlert('Sign up failed', 'error'),
        });
    }
};

export const logout = () => (dispatch) => {
    dispatch(setAlert('Logout successfully', 'success'));
    dispatch({ type: LOGOUT });
};
