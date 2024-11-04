import React, { useEffect, useState } from 'react'
import http from '../http'
const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        http.get('/users').then(res => {
            setUsers(res.data);
        })
    }
    return (
        <div>
            
            <h2>Users Listings...</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>SNo.</th>
                        <th>Name.</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>(
                        <tr key={user.id}>
                            <td>{++index}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>Edit</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default Users