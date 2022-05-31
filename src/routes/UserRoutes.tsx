import React from 'react';
import { Route } from 'react-router';
import BlocksMyProfile from '../components/blocks/Authorization/BlocksMyProfile';
import BlocksRegister from '../components/blocks/Authorization/BlocksRegister';
import BlocksUserLogin from '../components/blocks/Authorization/BlocksUserLogin';
import BlocksListReservations from '../components/blocks/Reservation/BlocksListReservations';
import BlocksReservation from '../components/blocks/Reservation/BlocksReservation';
import UserLayouts from '../components/main/authorization/UserLayouts';
import UserProtectedRoutes from './UserProtectedRoutes';

export default [
  <Route element={<UserProtectedRoutes />}>
    <Route element={<UserLayouts />}>
      {localStorage.getItem('projection_id') ? (
        <>
          <Route path="/rezervisi" element={<BlocksReservation />} />
          <Route path="/moj-profil" element={<BlocksMyProfile />} />
          <Route
            path="/moje-rezervacije"
            element={<BlocksListReservations />}
          />
        </>
      ) : (
        <>
          <Route
            path="/moje-rezervacije"
            element={<BlocksListReservations />}
          />
          <Route path="/moj-profil" element={<BlocksMyProfile />} />
          {localStorage.getItem('role') !== 'user' ? (
            <Route path="/rezervisi" element={<BlocksReservation />} />
          ) : (
            ''
          )}
        </>
      )}
    </Route>
  </Route>,
  <>
    {!localStorage.getItem('role') ? (
      <Route element={<UserLayouts />}>
        <Route path="/prijava" element={<BlocksUserLogin />} />
        <Route path="/registracija" element={<BlocksRegister />} />
      </Route>
    ) : (
      <Route element={<UserLayouts />}>
        <Route path="/prijava" element={<BlocksListReservations />} />
      </Route>
    )}
  </>,
];
// }
