import React from 'react';
import AuthService from '../../domain/authorization/AuthService';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminNavBar() {
  const navigate = useNavigate();
  const logout = () => {
    // AuthService.logout().then(() => {});
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/prijava-admin');
  };
  return (
    <ul className="navbar-nav ml-5 auth-nav">
      <Link className="auth-navbar-text" to="/dodaj-film">
        Dodaj film
      </Link>
      <Link className="auth-navbar-text" to="/dodaj-projekciju">
        Dodaj projekciju
      </Link>
      <Link className="auth-navbar-text" to="/dodaj-vest">
        Dodaj vest
      </Link>
      <Link className="auth-navbar-text" to="/svi-filmovi">
        Svi filmovi
      </Link>
      <Link className="auth-navbar-text" to="/sve-projekcije">
        Sve projekcije
      </Link>
      <Link className="auth-navbar-text" to="/sve-vesti">
        Sve vesti
      </Link>
      {localStorage.getItem('role') == 'admin' ? (
        <Link className="auth-navbar-text" to="/odjava" onClick={logout}>
          Odjavi se
        </Link>
      ) : (
        ''
      )}
    </ul>
  );
}
