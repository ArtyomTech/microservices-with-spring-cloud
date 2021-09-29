// React
import React, { useEffect, useState } from 'react';

// API
import api from '../api/users';

const Department = () => {
    const [users, setUsers] = useState([]);

    const getUsersResponse = async () => {
        const response = await api.get("/users");
        return response.data;
    }

    useEffect(() => {
        const getUsers = async () => {
            const responseUsers = await getUsersResponse();
            if (responseUsers) {
                setUsers(responseUsers);
            }
        }

        getUsers();
    }, []);

    const usersList = users.map((user) => {
        return (
            <li class="list-group-item">{user.departmentUser.firstName}</li>
        );
    });

    return (
        <ul class="list-group">
            {usersList}
        </ul>
    )
}

export default Department;
