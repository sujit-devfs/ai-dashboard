import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const CategoryDistributionChart = ({ categoryData }) => {
  return (
    <div>
      <h2>Category Distribution</h2>
      <ResponsiveContainer width="100%" height={400}>
      <BarChart data={categoryData} 
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }} barSize={45}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryDistributionChart;
