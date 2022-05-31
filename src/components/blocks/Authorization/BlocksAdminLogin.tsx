import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../../hook/FormHook';
import AuthService from '../../../domain/authorization/AuthService';
import Authentication from '../../../class/Authentication';
import ToastyNotify from '../../../class/ToastyNotify';
import { ToastContainer } from 'react-toastify';

interface InputField {
  email: string;
  password: string;
}
export default function BlocksAdminLogin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputField>({ resolver: yupResolver(loginSchema) });

  const setLocalStorage = (response: any, role: string) => {
    Authentication.setToken(response.data.token);
    Authentication.setRole(role);
  };

  const submitForm = (data: InputField) => {
    AuthService.login(data)
      .then((response) => {
        let role = response.data.user.role;
        if (role == 'admin') {
          setLocalStorage(response, role);
          reset();
          navigate('/svi-filmovi');
        } else {
          ToastyNotify.errorMessage('Pogresno logovanje');
        }
      })
      .catch(() => {
        ToastyNotify.errorMessage('Pogresan email i lozinka');
      });
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="field-container mt-3">
        <div className="col-lg-12">
          <div className="row justify-content-center">
            <form
              className="col-lg-5 mt-5 login-form"
              onSubmit={handleSubmit(submitForm)}
            >
              <div className="form-outline mb-4">
                <label className="form-label login-label">Email</label>
                <input
                  type="text"
                  {...register('email')}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
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
              </div>
              <div className="row mb-4">
                <div className="col text-right">
                  <a href="#!">Zaboravili ste lozinku?</a>
                </div>
              </div>
              <hr />
              <button type="submit" className="btn login-button btn-block mb-1">
                Uloguj se
              </button>
              <button
                type="button"
                className="btn register-button btn-block mb-4"
                onClick={() => {
                  navigate('/registracija');
                }}
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
