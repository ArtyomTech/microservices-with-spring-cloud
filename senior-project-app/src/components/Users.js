// React
import { Link } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

const Users = () => {
    const users = useSelector((state) => state.users.users);
    const usersList = users.map((departmentUser) => {
        const { user } = departmentUser;
        const { userId } = user;

        return (
            <tr key={userId}>
                <td>
                    <Link to={`/users/${userId}`}>{user.firstName + ' ' + user.lastName}</Link>
                </td>
            </tr>
        );
    });

    return usersList;
};

export default Users;
