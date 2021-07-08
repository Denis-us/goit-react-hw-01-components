import React from 'react';
// Компоненты
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
// JSON-files
import user from './json-files/user.json';
import statisticalData from './json-files/statistical-data.json';
import friends from './json-files/friends.json';
import transactions from './json-files/transactions.json';
// import logo from './logo.svg';
import './index.css';

const App = () => {
  return (
    <>
    
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={ statisticalData } />
      <Statistics stats={ statisticalData } />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

    </>
  );
}

export default App;
