import React from 'react';

import Profile from './components/Profile';
import Statistics from './components/Statistics';
import StatisticsEl from './components/StatisticsEl';

import user from './json-files/user.json';
import statisticalData from './json-files/statistical-data.json';
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  return (
    <div>
      
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

    
      <Statistics title="Upload stats" stats={statisticalData} />
      <StatisticsEl stats={statisticalData} />
        

      

    </div>
  );
}

export default App;
