import { Navigate, Outlet } from 'react-router-dom';
import Authentication from '../class/Authentication';

export default function UserProtectedRoutes() {
  let userAuth = Authentication.getRole();

  return userAuth == 'user' ? <Outlet /> : <Navigate to="/prijava" />;
}
