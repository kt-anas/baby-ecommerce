import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function UserDetail() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    /**
     * Asynchronously fetches a user from the server and updates the state accordingly.
     * Sets loading state to true before fetching, and false after fetching.
     * If an error occurs during fetching, sets an error message and logs the error.
     *
     * @returns {Promise<void>}
     */
    const fetchUser = async () => {
      try {
        // Fetch user data from the server
        // The API endpoint is constructed using the userId parameter from the URL
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        
        // Update the state with the fetched user data
        setUser(response.data);
      } catch (error) {
        // Set error message and log the error
        // The error message is meant to be displayed to the user
        setError('Error fetching user details');
        console.error('Error fetching user details:', error);
      } finally {
        // Set loading state to false, indicating that the data is fetched and the UI can be updated
        setLoading(false);
      }
    };

    fetchUser();
  });

  /**
   * Update the user status and redirect to the user list page
   * @returns {Promise<void>}
   */
  const UserStatus = async () => {
    // Check the current status of the user
    if (user.status === 'Blocked') {
      try {
        // Update the user status to 'active'
        await axios.patch(`http://localhost:3000/users/${userId}`, { status: 'active' });
        // Show a success message
        toast.success('User unblocked');
        // Redirect to the user list page
        navigate(`/userDetails/${userId}`);
      } catch (err) {
        // Show an error message if the update fails
        toast.error('Error updating user status');
      }
    } else if (user.status === 'active') {
      try {
        // Update the user status to 'Blocked'
        await axios.patch(`http://localhost:3000/users/${userId}`, { status: 'Blocked' });
        // Show a success message
        toast.success('User blocked');
        // Redirect to the user list page
        navigate(`/userDetails/${userId}`);
      } catch (err) {
        // Show an error message if the update fails
        toast.error('Error updating user status');
      }
    }
  };

  if (loading) return <div className="text-center text-gray-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster />
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md border-b-2 border-gray-100 py-4 px-6 flex items-center">
        <button
          onClick={() => navigate('/admin')}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Users
        </button>
        <h1 className="text-2xl font-bold flex-grow text-center">User Details</h1>
      </nav>
      
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-2xl p-10 bg-white rounded-3xl border-2 border-gray-100">
          <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
          <p className="text-lg text-gray-700 mb-4"><span className="font-semibold">Email:</span> {user.email}</p>
          <div className="flex justify-between mt-4">
            
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              onClick={UserStatus}
            >
              {user.status === 'active' ? (
                  <div>Block User</div>):(
                    <div>UnBlock User</div>
                )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
