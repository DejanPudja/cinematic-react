import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import ToastyNotify from '../../../../class/ToastyNotify';
import MovieService from '../../../../domain/movies/MovieService';
import MovieViewMapper from '../../../../domain/movies/MovieViewMapper';
import PartsLoadingSpinner from '../../../parts/PartsLoadingSpinner';
import BlockListMovie from './BlockListMovie';

export default function BlocksListMovies() {
  const [movies, setMovies] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    let movies = await MovieService.getAllMovies();
    let mappedMovies = MovieViewMapper.map(movies?.movies);
    setMovies(mappedMovies);
    setLoading(false);
  };
  const notify = () => {
    ToastyNotify.successMessage('Uspešno obrisan film');
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="container">
      <ToastContainer />
      <div className="field-container mt-3">
        <div className="col-lg-12">
          <div className="row justify-content-center table-responsive">
            {!loading ? (
              <table className="table table-sm table-dark table-list">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Naziv</th>
                    <th>Zanr</th>
                    <th>Trajanje</th>
                    <th>Uskoro</th>
                    <th>Datum prikazivanja</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {movies.map((movie: any, index: number) => {
                    return (
                      <BlockListMovie
                        movie={movie}
                        key={index}
                        fetchMovies={fetchMovies}
                        notify={notify}
                      />
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <PartsLoadingSpinner />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
