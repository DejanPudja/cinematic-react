import { useEffect, useState } from 'react';
import MovieService from '../../../domain/movies/MovieService';
import MovieViewMapper from '../../../domain/movies/MovieViewMapper';
import PartsLoadingSpinner from '../../parts/PartsLoadingSpinner';
import BlocksMovieCard from './BlocksMovieCard';

export default function BlocksMoviesLists() {
  const [movies, setMovies] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchMovies = async () => {
    let movies = await MovieService.getComingSoonMovies();
    let mappedMovies = MovieViewMapper.map(movies?.movies);
    setMovies(mappedMovies);
    setLoading(false);
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="caption-field">
        <h4 className="caption pl-5 pt-4">Uskoro na repertoaru</h4>
      </div>
      <div className="container-fluid">
        {!isLoading ? (
          movies.map((movie: any, index: number) => {
            return (
              <BlocksMovieCard
                movie={movie}
                key={index}
                broadcast={true}
                duration={false}
              />
            );
          })
        ) : (
          <PartsLoadingSpinner />
        )}
      </div>
    </div>
  );
}
