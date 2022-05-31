import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { moviesSchema } from '../../../../hook/FormHook';
import MovieService from '../../../../domain/movies/MovieService';
import { ToastContainer } from 'react-toastify';
import ToastyNotify from '../../../../class/ToastyNotify';

interface TypeInputFields {
  title: string;
  english_title: string;
  director: string;
  actors: string;
  genre: string;
  distributor: string;
  country_of_origin: string;
  duration: number;
  trailer: string;
  year_of_production: string;
  coming_soon: string;
  broadcast_date: string;
  description: string;
  image: string;
}
export default function BlocksAddMovies() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TypeInputFields>({ resolver: yupResolver(moviesSchema) });

  const submitForm = (data: TypeInputFields) => {
    MovieService.addMovies(data)
      .then(() => {
        ToastyNotify.successMessage('Uspešno dodat film');
        reset();
      })
      .catch(() => {
        ToastyNotify.errorMessage('Došlo je do greške');
      });
  };
  return (
    <div className="container">
      <div className="field-container mt-3">
        <div className="col-lg-12">
          <div className="row justify-content-center">
            <form
              className="col-lg-8 form-add-movies mt-3"
              onSubmit={handleSubmit(submitForm)}
              autoComplete="off"
            >
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Naslov</label>
                  <input
                    type="text"
                    {...register('title')}
                    className={`form-control ${
                      errors.title ? 'is-invalid' : ''
                    }`}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Naslov na engleskom</label>
                  <input
                    type="text"
                    {...register('english_title')}
                    className={`form-control ${
                      errors.title ? 'is-invalid' : ''
                    }`}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Reziser filma</label>
                  <input
                    type="text"
                    {...register('director')}
                    className={`form-control ${
                      errors.director ? 'is-invalid' : ''
                    }`}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Glumci</label>
                  <input
                    type="text"
                    {...register('actors')}
                    className={`form-control ${
                      errors.actors ? 'is-invalid' : ''
                    }`}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Zanr</label>
                  <input
                    type="text"
                    {...register('genre')}
                    className={`form-control ${
                      errors.genre ? 'is-invalid' : ''
                    }`}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>Distributer</label>
                  <input
                    type="text"
                    {...register('distributor')}
                    className={`form-control ${
                      errors.distributor ? 'is-invalid' : ''
                    }`}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label>Zemlja porekla</label>
                  <input
                    type="text"
                    {...register('country_of_origin')}
                    className={`form-control ${
                      errors.country_of_origin ? 'is-invalid' : ''
                    }`}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label>Trajanje filma</label>
                  <input
                    type="text"
                    {...register('duration')}
                    className={`form-control ${
                      errors.duration ? 'is-invalid' : ''
                    }`}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label>Godina proizvodnje</label>
                  <input
                    type="text"
                    {...register('year_of_production')}
                    className={`form-control ${
                      errors.year_of_production ? 'is-invalid' : ''
                    }`}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Triler filma</label>
                  <input
                    type="text"
                    {...register('trailer')}
                    className={`form-control ${
                      errors.trailer ? 'is-invalid' : ''
                    }`}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label>Uskoro</label>
                  <select
                    {...register('coming_soon')}
                    className={`form-control ${
                      errors.coming_soon ? 'is-invalid' : ''
                    }`}
                  >
                    <option>Da</option>
                    <option>Ne</option>
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label>Pocetak prikazivanja</label>
                  <input
                    type="date"
                    {...register('broadcast_date')}
                    className={`form-control ${
                      errors.broadcast_date ? 'is-invalid' : ''
                    }`}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label>Opis filma</label>
                  <textarea
                    {...register('description')}
                    className={`form-control description-field ${
                      errors.description ? 'is-invalid description-field' : ''
                    }`}
                  ></textarea>
                </div>
                <div className="form-group col-md-3">
                  <label>Fotografija</label>
                  <input
                    type="text"
                    {...register('image')}
                    className={`form-control ${
                      errors.image ? 'is-invalid ' : ''
                    }`}
                  />
                </div>
              </div>
              <button type="submit" className="btn col-md-12 mb-5">
                Dodaj novi film
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
