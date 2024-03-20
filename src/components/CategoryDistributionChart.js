import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const CategoryDistributionChart = ({ categoryData }) => {
  return (
    <div className="bar">
      <h2>Category Distribution</h2>
      <ResponsiveContainer width="100%" height={400}>
      <BarChart data={categoryData} 
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }} barSize={45}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" stroke="white"/>
        <YAxis stroke="white"/>
        <Tooltip fill="grey"/>
        <Legend />
        <Bar dataKey="count" fill="#8530d1" />
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryDistributionChart;
