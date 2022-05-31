import { Navigate, Outlet } from 'react-router-dom';
import Authentication from '../class/Authentication';

export default function AdminProtectedRoutes() {
  let adminAuth = Authentication.getRole();
  return adminAuth == 'admin' ? <Outlet /> : <Navigate to="/prijava-admin" />;
}
