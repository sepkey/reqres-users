import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../features/auth/context/auth-context';
import { signInPath } from './paths';

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={signInPath()} replace />;
  }

  return <Outlet />;
}
