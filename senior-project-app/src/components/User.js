// React
import { useEffect } from 'react'
import { useParams } from 'react-router'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Bootstrap
import { Table } from 'react-bootstrap'

// API
import { fetchUser } from '../api/RestUsers'

function User() {
    const departmentUser = useSelector((state) => state.user)
    const { userId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        if (userId) {
            fetchUser(dispatch, userId)
        }
    }, [userId, dispatch])

    const { user } = departmentUser
    return (
        <>
            {!user ? (
                <div>...Loading</div>
            ) : (
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={userId}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    </tbody>
                </Table>
            )}
        </>
    )
}

export default User
