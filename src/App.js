import "./App.css";
import React, { useState, useEffect } from "react";
import CategoryDistributionChart from "./components/CategoryDistributionChart";
import ResponseTimesChart from "./components/ResponseTimesChart";
import UserSatisfactionChart from "./components/UserSatisfactionChart";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState([]);
  const [responseTimesData, setResponseTimesData] = useState([]);
  const [userSatisfactionData, setuserSatisfactionData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/ai-data.json"); // Mock API call

      const data = await response.json();

      console.log(data);

      setCategoryData(
        Object.entries(data.category_distribution).map(([category, count]) => ({
          category,
          count,
        }))
      );
      setResponseTimesData(data.response_times.day_wise);
      setuserSatisfactionData(data.user_satisfaction.ratings);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <h1>AI Insights Dashboard</h1>
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="chart-container">
            <CategoryDistributionChart categoryData={categoryData} />
            <ResponseTimesChart responseTimesData={responseTimesData} />
            <UserSatisfactionChart userSatisfactionData={userSatisfactionData} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
