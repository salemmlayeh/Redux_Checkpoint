import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'; // we’ll create this next

export default function UserList() {
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setListOfUser(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="userlist">
      <h2>Users from JSONPlaceholder</h2>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Company: {user.company?.name}</p>
            <p>City: {user.address?.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
