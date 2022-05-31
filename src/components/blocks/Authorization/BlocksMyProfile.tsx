import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editUserSchema } from '../../../hook/FormHook';
import AuthService from '../../../domain/authorization/AuthService';
import PartsLoadingSpinner from '../../parts/PartsLoadingSpinner';
import ToastyNotify from '../../../class/ToastyNotify';
import { ToastContainer } from 'react-toastify';

interface TypeInputFields {
  firstName: string;
  lastName: string;
}
export default function BlocksMyProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  let id: number = Number(localStorage.getItem('user_id'));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeInputFields>({ resolver: yupResolver(editUserSchema) });

  const setStates = (response: any) => {
    setFirstName(response.firstName);
    setLastName(response.lastName);
    setEmail(response.email);
    setLoading(false);
  };
  const fetchUser = () => {
    AuthService.getUserById(id).then((response) => {
      setStates(response);
    });
  };

  const submitForm = (data: TypeInputFields) => {
    let updatedData = {
      id: id,
      firstName: data.firstName,
      lastName: lastName,
    };
    AuthService.editUser(updatedData)
      .then(() => {
        ToastyNotify.successMessage('Uspesno izmenjen profil');
        window.location.reload();
      })
      .catch(() => {
        ToastyNotify.successMessage('Došlo je do greške');
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="container">
      <ToastContainer />
      <div className="field-container mt-3">
        <div className="col-lg-12 ">
          <div className="row justify-content-center ">
            {!loading ? (
              <form
                className="col-lg-5 mt-5 login-form "
                onSubmit={handleSubmit(submitForm)}
                autoComplete="off"
              >
                <div className="form-outline mb-4">
                  <label className="form-label login-label">Ime</label>
                  <input
                    type="text"
                    value={firstName || ''}
                    {...register('firstName')}
                    className={`form-control ${
                      errors.firstName ? 'is-invalid' : ''
                    }`}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setFirstName(event.target.value);
                    }}
                  />
                  <p className="error-message">{errors.firstName?.message}</p>
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label login-label">Prezime</label>
                  <input
                    type="text"
                    value={lastName || ''}
                    {...register('lastName')}
                    className={`form-control ${
                      errors.lastName ? 'is-invalid' : ''
                    }`}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setLastName(event.target.value);
                    }}
                  />
                  <p className="error-message">{errors.lastName?.message}</p>
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label login-label">Email</label>
                  <input
                    type="email"
                    value={email || ''}
                    disabled
                    className={`form-control`}
                  />
                </div>
                <button
                  type="submit"
                  className="btn register-button btn-block mb-4"
                >
                  Izmeni
                </button>
              </form>
            ) : (
              <PartsLoadingSpinner />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
