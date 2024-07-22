import React from 'react';
import Dashboard from '../../components/admin/Dashboard/Dashboard';
import { Outlet } from 'react-router-dom';

/**
 * Admin component
 *
 * This component renders the admin dashboard and user interface. It includes
 * the Dashboard component and the main content area.
 *
 * @returns {JSX.Element} The admin component
 */
export default function Admin() {
  return (
    // Main container
    <div className="flex min-h-screen min-w-screen bg-gray-100">
      {/* Dashboard component */}
      <Dashboard />
      
      <div className="flex flex-col flex-1">
        {/* Header */}
        <h1 className='h-14 w-full bg-white flex items-center justify-center'>
          Hello ,Boss
        </h1>

        <div className="p-5 flex-1">
          {/* Main content area */}
          <div className="bg-white p-5 shadow-md rounded-lg">
            
            {/* Render the child routes */}
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}
