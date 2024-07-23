 // src/components/Revenue.js

import React from 'react';
 

export default function Revenue() {
  const totalRevenue = revenueData.reduce((acc, data) => acc + data.revenue, 0);
  const currentMonthRevenue = revenueData[revenueData.length - 1].revenue;

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Revenue</h2>
      <div className="mb-6">
        <p className="text-lg font-semibold">Total Revenue: <span className="text-black">${totalRevenue.toLocaleString()}</span></p>
        <p className="text-lg font-semibold">Revenue This Month: <span className="text-black">${currentMonthRevenue.toLocaleString()}</span></p>
      </div>
       
    </>
  );
}
