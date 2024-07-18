import React from 'react';
import Dashboard from '../../components/admin/Dashboard/Dashboard';
import { Outlet } from 'react-router-dom';

export default function Admin() {
  return (
    <div className="flex min-h-screen min-w-screen bg-gray-100">
      <Dashboard />
      
      <div className="flex flex-col flex-1">
        <h1 className='h-14 w-full bg-white flex items-center justify-center'>
          Hello ,Boss
        </h1>

        <div className="p-5 flex-1">
          <div className="bg-white p-5 shadow-md rounded-lg">
             
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}
