import { UserTypes } from './userTypes'

export const setUsers = (users) => {
    return {
        type: UserTypes.SET_USERS,
        payload: users
    }
}

export const selectedUser = (user) => {
    return {
        type: UserTypes.SELECTED_USER,
        payload: user
    }
}

export const removeSelectedUser = () => {
    return {
        type: UserTypes.REMOVE_SELECTED_USER
    }
}
