import React from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from "recharts";

const UserSatisfactionChart = ({ userSatisfactionData }) => {
  return (
    <>
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
            fill="#8884d8"
            label
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default UserSatisfactionChart;
