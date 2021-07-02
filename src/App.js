import React from 'react';
import user from './json-files/user.json';
import Profile from './components/Profile';
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

    </div>
  );
}

export default App;
