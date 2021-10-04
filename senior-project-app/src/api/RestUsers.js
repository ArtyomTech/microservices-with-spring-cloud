// Redux
import { setUsers, selectedUser } from '../redux/user/userActions';

// API
import api from './RestUtils';

export async function fetchUsers(dispatch) {
    const response = await api
        .get(`api/users/lala`)
        .catch(err => {
            console.log('Err ', err);
        });
    console.log('res', response);
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
