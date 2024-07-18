import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function UserList() {
    const [users, setUsers] = useState([]);
  const navigate=useNavigate();
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:3000/users');
                setUsers(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUsers();
    }, []);

    return (
        
            <>
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            <ul onClick={()=> navigate('/useDetails')}  className="  divide-y divide-gray-200">
                {users.map(user => (
                    <li key={user.id} className="py-4">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user' alt={user.name} />
                            </div>
                            <div className="ml-3">
                                <p className="text-lg font-medium text-gray-900">{user.name}</p>
                                <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            </>
         
    );
}
