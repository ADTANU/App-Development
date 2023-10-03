import React, { useEffect, useState } from 'react';
import '../assets/css/user.css';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/UserSlice';
import Footer from './footer';

const User = () => {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';
  const [userData, setUserData] = useState([]); // State to store user data
  const [newUser, setNewUser] = useState({}); // State to store data for a new user

  // Simulated user data (replace with actual data fetching)
  const simulatedUserData = [
    {
      id: 1,
      name: 'John Doe',
      address: '123 Main St',
      numTransactions: 3,
    },
    {
      id: 2,
      name: 'Jane Smith',
      address: '456 Elm St',
      numTransactions: 5,
    },
    // Add more user data
  ];

  useEffect(() => {
    // Simulate fetching user data from an API or database
    // Replace this with actual data fetching logic
    setUserData(simulatedUserData);
  }, []);

  const handleDeleteRow = (id) => {
    const updatedUserData = userData.filter((user) => user.id !== id);
    setUserData(updatedUserData);
  };

  const handleAddUser = () => {
    // Simulate adding a new user to the table
    const updatedUserData = [...userData, newUser];
    setUserData(updatedUserData);

    // Clear the newUser state
    setNewUser({});
  };

  return (
    <div>
      <h1>User Details</h1>
      <table className='user-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Number of Transactions Made</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>{user.numTransactions}</td>
              <td>
                <button onClick={() => handleDeleteRow(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                placeholder="Name"
                value={newUser.name || ''}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Address"
                value={newUser.address || ''}
                onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
              />
            </td>
            <td>
              <input
                type="number"
                placeholder="Number of Transactions"
                value={newUser.numTransactions || ''}
                onChange={(e) =>
                  setNewUser({ ...newUser, numTransactions: parseInt(e.target.value) })
                }
              />
            </td>
            <td>
              <button onClick={handleAddUser}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>

      <Footer />
    </div>
  );
};

export default User;
