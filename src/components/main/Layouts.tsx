import React from 'react';
import { Outlet } from 'react-router';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';

export default function Layouts() {
  return (
    <div className="main-container">
      <MainHeader />
      <Outlet />
      <MainFooter />
    </div>
  );
}
