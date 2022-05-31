import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BlocksMovieDetailCard from './BlocksMovieDetailCard';
import MovieService from '../../../domain/movies/MovieService';
import RepertoireService from '../../../domain/repertoire/RepertoireService';
import PartsLoadingSpinner from '../../parts/PartsLoadingSpinner';
import PartsTimeCard from '../../parts/PartsTimeCard';
import PartsModalTrailer from '../../parts/PartsModalTrailer';

export default function BlocksMovieDetail() {
  const [movie, setMovies] = useState<any>([]);
  const [projections, setProjections] = useState<any>([]);
  const [filteredProjections, setFilteredProjections] = useState<any>([]);
  const [dates, setDates] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const param = useParams();

  const fetchProjection = async () => {
    let projections = await RepertoireService.getProjectionByMovieId(
      Number(param.id)
    );
    let items: any = [];
    projections.filter((project: any) => {
      let date = new Date();
      const currentDate = `${date.getFullYear()}-${
        date.getMonth() <= 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      }-${date.getDate()}`;
      if (!items.includes(project.date) && project.date >= currentDate) {
        items.push(project.date);
      }
    });
    setDates(items);
    setProjections(projections);
  };

  const fetchMovies = async () => {
    let movie = await MovieService.getMovieById(param.id);
    setMovies(movie);
    setLoading(false);
  };
  const filterMovie = (param: string) => {
    const filteredProjectionsDate = projections.filter((dat: any) => {
      return dat.date === param;
    });
    setFilteredProjections(filteredProjectionsDate);
  };
  useEffect(() => {
    fetchMovies();
    fetchProjection();
  }, []);

  return (
    <div className="container">
      {!isLoading ? (
        <>
          <BlocksMovieDetailCard movie={movie} />
          <PartsModalTrailer trailer={movie.trailer} />
          {dates.length > 0 ? (
            <h5 className="text-center">
              Izaberi vreme projekcije i rezerviši
            </h5>
          ) : (
            ''
          )}
          <div className="col-lg-12">
            <div className="row">
              <div className="projection-date col-lg-3 col-sm-3">
                <div className="row">
                  {dates.map((date: any, index: number) => {
                    return (
                      <div className="col-lg-12 date-field mb-1" key={index}>
                        <button
                          onClick={() => {
                            filterMovie(date);
                          }}
                        >
                          {date}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              {dates.length > 0 ? (
                <div className="projection-time col-lg-8 col-sm-8">
                  {filteredProjections.map((projection: any, index: number) => {
                    return (
                      <a
                        href={`/rezervisi`}
                        onClick={() => {
                          localStorage.removeItem('projection_id');
                          localStorage.setItem('projection_id', projection.id);
                        }}
                      >
                        <PartsTimeCard projections={projection} key={index} />
                      </a>
                    );
                  })}
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </>
      ) : (
        <PartsLoadingSpinner />
      )}
    </div>
  );
}
