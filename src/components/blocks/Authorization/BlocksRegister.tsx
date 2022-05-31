import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../../hook/FormHook';
import AuthService from '../../../domain/authorization/AuthService';
import { useNavigate } from 'react-router';
import ToastyNotify from '../../../class/ToastyNotify';
import { ToastContainer } from 'react-toastify';

interface InputFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password_confirmation: string;
}
export default function BlocksRegister() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputFields>({ resolver: yupResolver(registerSchema) });

  const submitForm = (data: InputFields) => {
    AuthService.register(data).then(() => {
      ToastyNotify.successMessage('Uspešno kreiran nalog');
      reset();
      setTimeout(() => {
        navigate('/prijava');
      }, 800);
    });
  };
  return (
    <div className="container">
      <ToastContainer />
      <div className="field-container mt-3">
        <div className="col-lg-12 ">
          <div className="row justify-content-center ">
            <form
              className="col-lg-5 mt-5 login-form "
              onSubmit={handleSubmit(submitForm)}
            >
              <div className="form-outline mb-4">
                <label className="form-label login-label">Ime</label>
                <input
                  type="text"
                  {...register('firstName')}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
                <p className="error-message">{errors.firstName?.message}</p>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label login-label">Prezime</label>
                <input
                  type="text"
                  {...register('lastName')}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
                <p className="error-message">{errors.lastName?.message}</p>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label login-label">Email</label>
                <input
                  type="email"
                  {...register('email')}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
                <p className="error-message">{errors.email?.message}</p>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label login-label">Lozinka</label>
                <input
                  type="password"
                  {...register('password')}
                  className={`form-control ${
                    errors.password ? 'is-invalid' : ''
                  }`}
                />
                <p className="error-message">{errors.password?.message}</p>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label login-label">
                  Ponovite lozinku
                </label>
                <input
                  type="password"
                  {...register('password_confirmation')}
                  className={`form-control ${
                    errors.password_confirmation ? 'is-invalid' : ''
                  }`}
                />
                <p className="error-message">
                  {errors.password_confirmation?.message}
                </p>
              </div>
              <hr />
              <button
                type="submit"
                className="btn register-button btn-block mb-4"
              >
                Registruj se
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
