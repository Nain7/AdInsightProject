
import React from 'react';
import AdsCharts from './AdsCharts';
import AdsInsights from './AdsInsights';
import './Dashboard.css';

const Dashboard = () => {
  const handleToggleContent = () => {
  
    console.log('Toggling content');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <AdsInsights />
      </div>
      <div className="dashboard-box">
        <AdsCharts onToggleContent={handleToggleContent} />
      </div>
    </div>
  );
};

export default Dashboard;
