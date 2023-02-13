import { Navigate } from 'react-router-dom';

import ProtectedRouteProps from '../@types/props/PtotectedRouteProps';

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isLoggedIn = sessionStorage.getItem('isAuth');
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRoute;
