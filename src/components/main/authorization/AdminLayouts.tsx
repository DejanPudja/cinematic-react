import { Outlet } from 'react-router';
import AdminHeader from './AdminHeader';

export default function AdminLayouts() {
  return (
    <div className="auth-container">
      <AdminHeader />
      <Outlet />
      <div className="mt-2 container text-secondary">
        Copyright © 2022 Intens Net
      </div>
    </div>
  );
}
