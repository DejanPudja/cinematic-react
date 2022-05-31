import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { projectionsSchema } from '../../../../hook/FormHook';
import RepertoireService from '../../../../domain/repertoire/RepertoireService';
import PartsLoadingSpinner from '../../../parts/PartsLoadingSpinner';
import { ToastContainer } from 'react-toastify';
import ToastyNotify from '../../../../class/ToastyNotify';

interface TypeInputFields {
  movie: any;
  date: string;
  time: any;
  hall: number;
  price: number;
}
export default function BlocksAddProjections() {
  const navigate = useNavigate();
  const param = useParams();
  const allHall: any = [1, 2, 3, 4, 5, 6];
  const [id, setId] = useState('');
  const [date, setDate] = useState('');
  const [movie, setMovie] = useState('');
  const [movie_id, setMovieId] = useState('');
  const [time, setTime] = useState('');
  const [hall, setHall] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeInputFields>({ resolver: yupResolver(projectionsSchema) });

  const setStates = (response: any) => {
    setId(response.id);
    setMovie(response.title);
    setMovieId(response.movie_id);
    setDate(response.date);
    setTime(response.time);
    setHall(response.hall);
    setPrice(response.price);
    setLoading(false);
  };

  const fetchProjection = async () => {
    RepertoireService.getProjectionById(param.id).then((response) => {
      if (response.message) {
        navigate('/sve-projekcije');
      } else {
        setStates(response);
      }
    });
  };
  const submitForm = (data: TypeInputFields) => {
    let projection = {
      id: id,
      movie_id: movie_id,
      date: data.date,
      time: data.time,
      hall: data.hall,
      price: data.price,
    };
    RepertoireService.editProjection(projection).then(() => {
      ToastyNotify.successMessage('Uspesno izmenjena projekcija');
      setTimeout(() => {
        navigate('/sve-projekcije');
      }, 1500);
    });
  };
  useEffect(() => {
    fetchProjection();
  }, []);

  return (
    <div className="container">
      <ToastContainer />
      <div className="field-container mt-3">
        <div className="col-lg-12">
          <div className="row justify-content-center">
            {!loading ? (
              <form
                className="col-lg-8 form-add-movies mt-3"
                onSubmit={handleSubmit(submitForm)}
              >
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Film</label>
                    <fieldset disabled>
                      <input
                        type="text"
                        className="form-control"
                        value={movie}
                        {...register('movie')}
                      />
                    </fieldset>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Datum porojekcije</label>
                    <input
                      type="date"
                      value={date || ''}
                      {...register('date')}
                      className={`form-control ${
                        errors.date ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setDate(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label>Vreme projekcije</label>
                    <input
                      type="time"
                      value={time || ''}
                      {...register('time')}
                      className={`form-control ${
                        errors.time ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setTime(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label>Sala</label>
                    <select
                      value={hall || ''}
                      {...register('hall')}
                      className={`form-control ${
                        errors.hall ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLSelectElement>
                      ) => {
                        setHall(event.target.value);
                      }}
                    >
                      {allHall.map((hall: any, index: number) => {
                        return <option key={index}>{hall}</option>;
                      })}
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label>Cena projekcije</label>
                    <input
                      type="number"
                      value={price || ''}
                      {...register('price')}
                      className={`form-control ${
                        errors.price ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setPrice(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <button type="submit" className="btn col-md-12 ">
                  Izmeni projekciju
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
