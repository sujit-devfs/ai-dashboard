import React from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#8530d1'];

const UserSatisfactionChart = ({ userSatisfactionData }) => {
  return (
    <div className="pie">
      <h2>User Satisfaction</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <Pie
            data={userSatisfactionData}
            dataKey="count"
            nameKey="rating"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8530d1"
            label
            >
            {userSatisfactionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserSatisfactionChart;
