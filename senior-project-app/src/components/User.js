// React
import { useEffect } from 'react';
import { useParams } from 'react-router';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { selectedUser, removeSelectedUser } from '../redux/actions/userActions';

// API
import api from '../api/users';

function User() {
    const user = useSelector((state) => state.user);
    const { userId } = useParams();
    const dispatch = useDispatch();

    const fetchUser = async () => {
        const response = await api
            .get(`users/${userId}`)
            .catch(err => {
                console.log('Err ', err);
            });

        if (response) {
            dispatch(selectedUser(response.data));
        }
    };

    useEffect(() => {
        if (userId) fetchUser();
        return () => {
            dispatch(removeSelectedUser());
        }
    }, [userId, dispatch]);

    const { departmentUser } = user;
    return (
        <>
            {!departmentUser ? (
                <div>...Loading</div>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={userId}>
                            <td>{departmentUser.firstName + ' ' + departmentUser.lastName}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    )
}

export default User;
