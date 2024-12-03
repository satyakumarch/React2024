import React, { useContext } from 'react';
import { AuthContext } from './AuthContextETP'; // Adjust the import path as necessary

const DataDisplay = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Authentication Status: {isAuthenticated ? 'Logged In' : 'Logged Out'}</h1>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default DataDisplay;