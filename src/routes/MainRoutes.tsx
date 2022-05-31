import React from 'react';
import { Route } from 'react-router';
import BlocksMovieDetail from '../components/blocks/Movies/BlocksMovieDetail';
import BlocksRepertoire from '../components/blocks/Movies/BlocksRepertoire';
import Layouts from '../components/main/Layouts';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import BlocksPricelist from '../pages/Pricelist';
import BlocksComingSoonMovies from '../components/blocks/Movies/BlocksComingSoonMovies';

export default [
  <Route element={<Layouts />}>
    <Route path="/" element={<Home />} />
    <Route path="/uskoro" element={<BlocksComingSoonMovies />} />
    <Route path="/film/:id" element={<BlocksMovieDetail />} />
    <Route path="/repertoar" element={<BlocksRepertoire />} />
    <Route path="/cenovnik" element={<BlocksPricelist />} />
    <Route path="/onama" element={<AboutUs />} />
    <Route path="/kontakt" element={<Contact />} />
    <Route path="*" element={<Home />} />
  </Route>,
];
