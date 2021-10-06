// Redux
import { setUsers, selectedUser } from '../redux/user/userActions';

// API
import api from './RestUtils';

export async function fetchUsers(dispatch) {
    const response = await api
        .get(`api/users`)
        .catch(err => {
            console.log('Err ', err);
        });

    dispatch(setUsers(response.data));
}

export async function fetchUser(dispatch, userId) {
    const response = await api
        .get(`api/users/${userId}`)
        .catch(err => {
            console.log('Err ', err);
        });
    dispatch(selectedUser(response.data));
}
