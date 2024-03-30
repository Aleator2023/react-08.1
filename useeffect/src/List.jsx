import React, { useState, useEffect } from 'react';

const List = ({ onSelect }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map(user => (
        <div 
          key={user.id} 
          onClick={() => onSelect(user)}
          className="user-item" 
        >
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default List