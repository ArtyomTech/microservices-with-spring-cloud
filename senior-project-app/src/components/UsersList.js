// React
import React, { useEffect } from 'react';

// Components
import Users from './Users';

// API
import api from '../api/users';

// Redux
import { useDispatch } from 'react-redux';
import { setUsers } from '../redux/actions/userActions'

function UsersList() {
    const dispatch = useDispatch();
    const fetchUsers = async () => {
        const response = await api
            .get("/users")
            .catch((err) => {
                console.log('Error', err);
            })

        if (response) {
            dispatch(setUsers(response.data));
        }
    };

    useEffect(() => {
        fetchUsers();
    });

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                </tr>
            </thead>
            <tbody>
                <Users />
            </tbody>
        </table>

        /*<ul className="list-group">
            <Users />
        </ul>*/
    )
}

export default UsersList;
