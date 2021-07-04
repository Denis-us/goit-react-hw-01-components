import React from 'react';

import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import user from './json-files/user.json';
import statisticalData from './json-files/statistical-data.json';
import friends from './json-files/friends.json';
import transactions from './json-files/transactions.json';
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

      <Statistics title="Upload stats" stats={ statisticalData } />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

    </div>
  );
}

export default App;
