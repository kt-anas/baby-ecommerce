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
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        setError('Error fetching user details');
        console.error('Error fetching user details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const deleteUser = async () => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      toast.success('User deleted successfully');
      navigate('/admin'); // Redirect to the user list page after deletion
    } catch (err) {
      toast.error('Error deleting user');
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
              onClick={deleteUser}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
