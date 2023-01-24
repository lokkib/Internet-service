import { Navigate } from 'react-router-dom';
import React from 'react'

const ProtectedRoute:React.FC = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRoute;
