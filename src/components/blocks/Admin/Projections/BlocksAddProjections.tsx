import React, { useEffect, useState } from 'react';
import MovieService from '../../../../domain/movies/MovieService';
import MovieViewMapper from '../../../../domain/movies/MovieViewMapper';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { projectionsSchema } from '../../../../hook/FormHook';
import RepertoireService from '../../../../domain/repertoire/RepertoireService';
import { useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';
import ToastyNotify from '../../../../class/ToastyNotify';

interface TypeInputFields {
  movie: string;
  date: string;
  time: string;
  hall: number;
  price: number;
}
export default function BlocksAddProjections() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<any>([]);
  const hall: any = [1, 2, 3, 4, 5, 6];

  const fetchMovies = async () => {
    let movies = await MovieService.getAllMovies();
    let mappedMovies = MovieViewMapper.map(movies?.movies);
    setMovies(mappedMovies);
  };
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<TypeInputFields>({ resolver: yupResolver(projectionsSchema) });

  const submitForm = (data: TypeInputFields) => {
    let hidden = movies.filter((data: any) => {
      if (data.title === getValues('movie')) {
        return data;
      }
    });
    let projection = {
      movie_id: hidden[0].id,
      date: data.date,
      time: data.time,
      hall: data.hall,
      price: data.price,
    };
    RepertoireService.addProjection(projection)
      .then(() => {
        ToastyNotify.successMessage('Uspešno dodata projekcija');
        setTimeout(() => {
          navigate('/sve-projekcije');
        }, 1500);
      })
      .catch(() => {
        ToastyNotify.errorMessage('Došlo je do greške');
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <ToastContainer />
      <div className="field-container mt-3">
        <div className="col-lg-12">
          <div className="row justify-content-center">
            <form
              className="col-lg-8 form-add-movies mt-3"
              onSubmit={handleSubmit(submitForm)}
            >
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Film</label>
                  <select
                    {...register('movie')}
                    className={`form-control mov ${
                      errors.movie ? 'is-invalid' : ''
                    }`}
                  >
                    <option>Izaberi film..</option>
                    {movies.map((movie: any, index: number) => {
                      return (
                        <option id={movie.id} key={index}>
                          {movie.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label>Datum porojekcije</label>
                  <input
                    type="date"
                    {...register('date')}
                    className={`form-control ${
                      errors.date ? 'is-invalid' : ''
                    }`}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>Vreme projekcije</label>
                  <input
                    type="time"
                    {...register('time')}
                    className={`form-control ${
                      errors.time ? 'is-invalid' : ''
                    }`}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label>Sala</label>
                  <select
                    {...register('hall')}
                    className={`form-control ${
                      errors.hall ? 'is-invalid' : ''
                    }`}
                  >
                    {hall.map((hall: any, index: number) => {
                      return <option key={index}>{hall}</option>;
                    })}
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label>Cena projekcije</label>
                  <input
                    type="number"
                    {...register('price')}
                    className={`form-control ${
                      errors.price ? 'is-invalid' : ''
                    }`}
                  />
                </div>
              </div>
              <button type="submit" className="btn col-md-12 mb-3">
                Dodaj projekciju
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
