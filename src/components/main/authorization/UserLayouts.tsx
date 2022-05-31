import { Outlet } from 'react-router';
import UserHeader from './UserHeader';

export default function UserLayouts() {
  return (
    <div className="auth-container">
      <UserHeader />
      <Outlet />
      <div className="mt-2 container text-secondary">
        Copyright © 2022 Intens Net
      </div>
    </div>
  );
}
