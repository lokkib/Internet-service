import { Navigate } from 'react-router-dom';
import React from 'react';
import ProtectedRouteProps from '../@types/PtotectedRouteProps';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem('isAuth');
  if (!isLoggedIn) {
    // console.log('нет авторизаци');
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRoute;