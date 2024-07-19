import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserList() {
    const [allUsers, setAllUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const limit = 7;

    const navigate = useNavigate();

    useEffect(() => {
        const fetchAllUsers = async () => {
            setLoading(true);
            try {
                const res = await axios.get('http://localhost:3000/users');
                setAllUsers(res.data);
            } catch (error) {
                setError('Error fetching users');
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllUsers();
    }, []);

    const currentUsers = allUsers.slice((page - 1) * limit, page * limit);
    const totalPages = Math.ceil(allUsers.length / limit);

    const nextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const previousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            <ul className="divide-y divide-gray-200">
                {Array.isArray(currentUsers) && currentUsers.map(user => (
                    <li
                        key={user.id}
                        className="py-4 cursor-pointer"
                        onClick={() => navigate(`/userDetails/${user.id}`)}
                    >
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src={user.image || 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user'}
                                    alt={user.name}
                                />
                            </div>
                            <div className="ml-3">
                                <p className="text-lg font-medium text-gray-900">{user.name}</p>
                                <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between mt-4">
                <button
                    onClick={previousPage}
                    disabled={page === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span>
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={nextPage}
                    disabled={page === totalPages}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
