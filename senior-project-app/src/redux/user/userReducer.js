import { UserTypes } from "./userTypes";

const initialState = {
    users: []
}

export const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UserTypes.SET_USERS:
            return { ...state, users: payload };
        default:
            return state;
    }
}

export const userReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case UserTypes.SELECTED_USER:
            return { ...state, ...payload };
        case UserTypes.REMOVE_SELECTED_USER:
            return {};
        default:
            return state;
    }
}
