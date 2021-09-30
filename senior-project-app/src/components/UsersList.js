// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Components
import Users from './Users';

// API
import { fetchUsers } from '../api/RestUsers';

function UsersList() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchUsers(dispatch);
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
    )
}

export default UsersList;
