import React from 'react';
import { Route } from 'react-router-dom';
import BlocksAddMovies from '../components/blocks/Admin/Movies/BlocksAddMovies';
import BlocksEditMovie from '../components/blocks/Admin/Movies/BlocksEditMovie';
import BlocksListMovies from '../components/blocks/Admin/Movies/BlocksListMovies';
import BlocksAddNews from '../components/blocks/Admin/News/BlocksAddNews';
import BlocksEditNews from '../components/blocks/Admin/News/BlocksEditNews';
import BlocksListNews from '../components/blocks/Admin/News/BlocksListNews';
import BlocksAddProjections from '../components/blocks/Admin/Projections/BlocksAddProjections';
import BlocksListProjections from '../components/blocks/Admin/Projections/BlocksListProjections';
import BlocksAdminLogin from '../components/blocks/Authorization/BlocksAdminLogin';
import AdminLayouts from '../components/main/authorization/AdminLayouts';
import AdminProtectedRoutes from './AdminProtectedRoutes';
import BlocksEditProjection from '../components/blocks/Admin/Projections/BlocksEditProjection';

export default [
  <Route element={<AdminProtectedRoutes />}>
    <Route element={<AdminLayouts />}>
      <Route path="/dodaj-film" element={<BlocksAddMovies />} />
      <Route path="/dodaj-projekciju" element={<BlocksAddProjections />} />
      <Route path="/dodaj-vest" element={<BlocksAddNews />} />
      <Route path="/svi-filmovi" element={<BlocksListMovies />} />
      <Route path="/sve-projekcije" element={<BlocksListProjections />} />
      <Route path="/sve-vesti" element={<BlocksListNews />} />
      <Route path="/izmeni-vest/:id" element={<BlocksEditNews />} />
      <Route path="/izmeni-projekciju/:id" element={<BlocksEditProjection />} />
      <Route path="/izmeni-film/:id" element={<BlocksEditMovie />} />
    </Route>
  </Route>,
  <Route element={<AdminLayouts />}>
    {localStorage.getItem('role') !== 'admin' ? (
      <Route path="/prijava-admin" element={<BlocksAdminLogin />} />
    ) : (
      ''
    )}
  </Route>,
];
