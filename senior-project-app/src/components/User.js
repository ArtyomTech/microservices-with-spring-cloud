// React
import { useEffect } from 'react';
import { useParams } from 'react-router';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// API
import { fetchUser } from '../api/RestUsers';

function User() {
    const user = useSelector((state) => state.user);
    const { userId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (userId) {
            fetchUser(dispatch, userId);
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
