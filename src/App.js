import React from 'react';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';
import './App.css';
function App() {
  return (
    <div className="App">
    <FullName />
    <ProfilePhoto />
    <Adress />
    </div>
  );
}

export default App;
