// React
import { Link } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

const Users = () => {
    const users = useSelector((state) => state.users.users);
    const usersList = users.map((departmentUser) => {
        const { user } = departmentUser;
        const { id } = user;

        return (
            <tr key={id}>
                <td>
                    <Link to={`/users/${id}`}>{user.name}</Link>
                </td>
                <td>
                    {user.email}
                </td>
            </tr>
        );
    });

    return usersList;
};

export default Users;
