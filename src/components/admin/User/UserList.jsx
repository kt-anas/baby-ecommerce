import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserList() {
    const [allUsers, setAllUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const limit = 7;

    const navigate = useNavigate();

    useEffect(() => {
        /**
         * Fetches all users from the API and updates the state with the fetched data.
         * Sets loading state to true before fetching, and false after fetching.
         * If an error occurs during fetching, sets an error message and logs the error.
         *
         * @returns {Promise<void>}
         */
        const fetchAllUsers = async () => {
            // Set loading state to true
            setLoading(true);

            try {
                // Fetch users from the API
                const res = await axios.get('http://localhost:3000/users');

                // Update the state with the fetched data
                setAllUsers(res.data);
            } catch (error) {
                // Set error message and log the error
                setError('Error fetching users');
                console.error('Error fetching users:', error);
            } finally {
                // Set loading state to false, indicating that the data is fetched and the UI can be updated
                setLoading(false);
            }
        };

        fetchAllUsers();
    }, []);

    const filteredUsers = allUsers.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const currentUsers = filteredUsers.slice((page - 1) * limit, page * limit);
    const totalPages = Math.ceil(filteredUsers.length / limit);

    /**
     * Navigates to the next page of users.
     * @param {number} prevPage - The current page number.
     * @returns {number} - The new page number.
     */
    const nextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, totalPages));
        /**
         * This is a comment explaining what the code does.
         * It sets the new page number to the minimum of the previous page number + 1 and the total number of pages.
         * This ensures we don't navigate to a page number greater than the total number of pages.
         */
    };

    /**
     * Navigates to the previous page of users.
     * @param {number} prevPage - The current page number.
     * @returns {number} - The new page number.
     */
    const previousPage = () => {
        // Set the new page number to the maximum of the previous page number - 1 and 1.
        // This ensures we don't navigate to a page number less than 1.
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
            <h2 className="text-2xl font-bold mb-4">User</h2>
            <div className="mb-4 flex justify-center">
                <input
                    type="text"
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border p-2 rounded-md w-1/3 bg-gray-100"
                />
            </div>
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
