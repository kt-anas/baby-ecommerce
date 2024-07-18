import React from 'react'

export default function UserDetail() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <div className="mb-6">
        <p className="text-lg"><span className="font-semibold">Name:</span>  </p>
        <p className="text-lg"><span className="font-semibold">Email:</span>  </p>
        <p className="text-lg"><span className="font-semibold">Role:</span>  </p>
        <p className="text-lg"><span className="font-semibold">Status:</span> </p>
      </div>
    </div>
  )
}
