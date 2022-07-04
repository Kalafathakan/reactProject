import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext, { AuthContextType } from '../context/AuthContext';

const ProtectedRoute = () => {
  const auth = useContext(AuthContext) as AuthContextType;
  if (!auth.isLoggedIn) {
    return <Navigate to='/login' replace />;
  }

  if (!auth.isAdmin && !auth.isLoggedIn) {
    return <Navigate to='/mypage' replace />;
  }

  return <Outlet />;
};
export default ProtectedRoute;
