import * as AT from "./authTypes";
import * as UT from "../user/userTypes";

import axios from "axios";

const AUTH_URL = "http://localhost:9191/api/users/login";
const REGISTER_URL = "http://localhost:9191/api/users/register";

export const authenticateUser = (email, password) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post(AUTH_URL, {
            email: email,
            password: password,
        });
        console.log('res token', response);
        localStorage.setItem("jwtToken", response.data.token);
        dispatch(success({ username: response.data.username, isLoggedIn: true }));
        return Promise.resolve(response.data);
    } catch (error) {
        dispatch(failure());
        return Promise.reject(error);
    }
};

export const logoutUser = () => {
    return (dispatch) => {
        dispatch(logoutRequest());
        localStorage.removeItem("jwtToken");
        dispatch(success({ username: "", isLoggedIn: false }));
    };
};

const loginRequest = () => {
    return {
        type: AT.LOGIN_REQUEST
    };
};

const logoutRequest = () => {
    return {
        type: AT.LOGOUT_REQUEST
    };
};

const success = (isLoggedIn) => {
    return {
        type: AT.SUCCESS,
        payload: isLoggedIn,
    };
};

const failure = () => {
    return {
        type: AT.FAILURE,
        payload: false,
    };
};

export const registerUser = (userObject) => async (dispatch) => {
    dispatch(userRequest());
    try {
        const response = await axios.post(REGISTER_URL, userObject);
        console.log('registerUser res', response);
        dispatch(userSavedSuccess(response.data));
        return Promise.resolve(response.data);
    } catch (error) {
        dispatch(userFailure(error.message));
        return Promise.reject(error);
    }
};

const userRequest = () => {
    return {
        type: UT.USER_REQUEST,
    };
};

const userSavedSuccess = (user) => {
    return {
        type: UT.USER_SAVED_SUCCESS,
        payload: user,
    };
};

const userFailure = (error) => {
    return {
        type: UT.USER_FAILURE,
        payload: error,
    };
};
