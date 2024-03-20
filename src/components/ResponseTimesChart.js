import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ResponseTimesChart = ({ responseTimesData }) => {
  return (
    <div className="line">
      <h2>Response Times</h2>   
      <ResponsiveContainer width="100%" height={400}>
      <LineChart data={responseTimesData}
      margin={{ top: 5, right: 60, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" stroke="white" />
        <YAxis stroke="white"/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="average_time" stroke="#8530d1" strokeWidth={3} />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ResponseTimesChart;
