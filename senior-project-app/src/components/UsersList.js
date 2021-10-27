// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Bootstrap
import { Table } from 'react-bootstrap';

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
        <Table bordered hover>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <Users />
            </tbody>
        </Table>
    )
}

export default UsersList;
