import React from "react";
import { useQuery } from "react-query";
import { fetchProfile } from "../../ReactQuery/Fetchers/Profile";

const Dashboard = () => {
  const { data, error, isLoading } = useQuery("profile", fetchProfile);
  if (error) {
    return <div>Something went wrong!</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>Dashboard</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default Dashboard;
