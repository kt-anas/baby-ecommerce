 // src/components/Revenue.js

import React from 'react';

const revenueData = [
  { month: 'January', revenue: 12000 },
  { month: 'February', revenue: 15000 },
  { month: 'March', revenue: 14000 },
  { month: 'April', revenue: 20000 },
  { month: 'May', revenue: 25000 },
  { month: 'June', revenue: 30000 },
];

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
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-left font-medium">Month</th>
              <th className="py-2 px-4 bg-gray-200 text-left font-medium">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {revenueData.map((data, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{data.month}</td>
                <td className="py-2 px-4">${data.revenue.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
