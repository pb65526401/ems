// src/Context/authContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create the context
const UserContext = createContext();

// Custom hook to use the context (optional but recommended)
export const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Auth Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (userData) => {
    // Simulate API login or set user data
    setUser(userData);
    // Save token to localStorage if needed
    // localStorage.setItem('token', userData.token);
  };

  const logout = () => {
    setUser(null);
    // localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Export the context (optional, but you already have useAuth)
export default UserContext;