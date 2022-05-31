import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { moviesSchema } from '../../../../hook/FormHook';
import MovieService from '../../../../domain/movies/MovieService';
import { useNavigate, useParams } from 'react-router';
import PartsLoadingSpinner from '../../../parts/PartsLoadingSpinner';
import ToastyNotify from '../../../../class/ToastyNotify';
import { ToastContainer } from 'react-toastify';

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
export default function BlocksEditMovie() {
  const navigate = useNavigate();
  const param = useParams();
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [english_title, setEnglishTitle] = useState('');
  const [director, setDirector] = useState('');
  const [actors, setActors] = useState('');
  const [genre, setGenre] = useState('');
  const [distributor, setDistributor] = useState('');
  const [country_of_origin, setConutry] = useState('');
  const [duration, setDuration] = useState('');
  const [trailer, setTrailer] = useState('');
  const [year_of_production, setYear] = useState('');
  const [coming_soon, setComingSoon] = useState('');
  const [broadcast_date, setBroadcastDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeInputFields>({ resolver: yupResolver(moviesSchema) });

  const setStates = (response: any) => {
    setId(response.id);
    setTitle(response.title);
    setEnglishTitle(response.english_title);
    setDirector(response.director);
    setActors(response.actors);
    setGenre(response.genre);
    setDistributor(response.distributor);
    setConutry(response.country_of_origin);
    setDuration(response.duration);
    setTrailer(response.trailer);
    setYear(response.year_of_production);
    setComingSoon(response.coming_soon);
    setBroadcastDate(response.broadcast_date);
    setDescription(response.description);
    setImage(response.image);
    setLoading(false);
  };
  const fetchProjection = () => {
    MovieService.getMovieById(param.id)
      .then((response) => {
        if (response.message) {
          navigate('/svi-filmovi');
        } else {
          setStates(response);
        }
      })
      .catch(() => {
        navigate('/svi-filmovi');
      });
  };
  const submitForm = (data: TypeInputFields) => {
    const updatedData = Object.assign({ id: id }, data);
    MovieService.editMovie(updatedData).then(() => {
      ToastyNotify.successMessage('Uspešno izmenjen film');
      setTimeout(() => {
        navigate('/svi-filmovi');
      }, 800);
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
                autoComplete="off"
              >
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Naslov</label>
                    <input
                      type="text"
                      value={title || ''}
                      {...register('title')}
                      className={`form-control ${
                        errors.title ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setTitle(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Naslov na engleskom</label>
                    <input
                      type="text"
                      value={english_title || ''}
                      {...register('english_title')}
                      className={`form-control ${
                        errors.english_title ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setEnglishTitle(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Reziser filma</label>
                    <input
                      type="text"
                      value={director || ''}
                      {...register('director')}
                      className={`form-control ${
                        errors.director ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setDirector(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Glumci</label>
                    <input
                      type="text"
                      value={actors || ''}
                      {...register('actors')}
                      className={`form-control ${
                        errors.actors ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setActors(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Zanr</label>
                    <input
                      type="text"
                      value={genre || ''}
                      {...register('genre')}
                      className={`form-control ${
                        errors.genre ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setGenre(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>Distributer</label>
                    <input
                      type="text"
                      value={distributor || ''}
                      {...register('distributor')}
                      className={`form-control ${
                        errors.distributor ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setDistributor(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label>Zemlja porekla</label>
                    <input
                      type="text"
                      value={country_of_origin || ''}
                      {...register('country_of_origin')}
                      className={`form-control ${
                        errors.country_of_origin ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setConutry(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label>Trajanje filma</label>
                    <input
                      type="text"
                      value={duration || ''}
                      {...register('duration')}
                      className={`form-control ${
                        errors.duration ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setDuration(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label>Godina proizvodnje</label>
                    <input
                      type="text"
                      value={year_of_production || ''}
                      {...register('year_of_production')}
                      className={`form-control ${
                        errors.year_of_production ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setYear(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Triler filma</label>
                    <input
                      type="text"
                      value={trailer || ''}
                      {...register('trailer')}
                      className={`form-control ${
                        errors.trailer ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setTrailer(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label>Uskoro</label>
                    <select
                      value={coming_soon || ''}
                      {...register('coming_soon')}
                      className={`form-control ${
                        errors.coming_soon ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLSelectElement>
                      ) => {
                        setComingSoon(event.target.value);
                      }}
                    >
                      <option>Da</option>
                      <option>Ne</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <label>Pocetak prikazivanja</label>
                    <input
                      type="date"
                      value={broadcast_date || ''}
                      {...register('broadcast_date')}
                      className={`form-control ${
                        errors.broadcast_date ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setBroadcastDate(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Opis filma</label>
                    <textarea
                      value={description || ''}
                      {...register('description')}
                      className={`form-control description-field ${
                        errors.description ? 'is-invalid description-field' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLTextAreaElement>
                      ) => {
                        setDescription(event.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className="form-group col-md-8">
                    <label>Fotografija</label>
                    <input
                      type="text"
                      value={image || ''}
                      {...register('image')}
                      className={`form-control ${
                        errors.image ? 'is-invalid ' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setImage(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <button type="submit" className="btn col-md-12 mb-5">
                  Izmeni film
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
