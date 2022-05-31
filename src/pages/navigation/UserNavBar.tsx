import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../domain/authorization/AuthService';

export default function UserNavBar() {
  const navigate = useNavigate();
  const logout = () => {
    // AuthService.logout()
    //   .then(() => {});
    navigate('/prijava');
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('projection_id');
    localStorage.removeItem('role');
  };
  return (
    <ul className="navbar-nav ml-5 auth-nav">
      <Link className="auth-navbar-text" to="/">
        Vrati se na sajt
      </Link>
      <Link className="auth-navbar-text" to="/moj-profil">
        Moj profil
      </Link>
      <Link className="auth-navbar-text" to="/rezervisi">
        Rezervisi ulaznice
      </Link>
      <Link className="auth-navbar-text" to="/moje-rezervacije">
        Moje rezervacije
      </Link>
      {localStorage.getItem('user_id') ? (
        <Link className="auth-navbar-text" to="/odjava" onClick={logout}>
          Odjavi se
        </Link>
      ) : (
        ''
      )}
    </ul>
  );
}
