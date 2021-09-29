// React
import { Link } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

const Users = () => {
    const users = useSelector((state) => state.allUsers.users);
    const usersList = users.map((user) => {
        const { departmentUser } = user;
        const { userId } = departmentUser;

        return (
            <tr key={userId}>
                <td>
                    <Link to={`/users/${userId}`}>{departmentUser.firstName + ' ' + departmentUser.lastName}</Link>
                </td>
            </tr>
        );
    });

    return usersList;
};

export default Users;
