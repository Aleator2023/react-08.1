import React, { useState, useEffect } from 'react';
import List from './List'
import Details from './Details';
import './App.css'

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <List onSelect={setSelectedUser} />
      <Details info={selectedUser} />
    </div>
  );
};

export default App;