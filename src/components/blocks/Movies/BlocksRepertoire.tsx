import { useEffect, useState } from 'react';
import RepertoireService from '../../../domain/repertoire/RepertoireService';
import RepertoireViewMapper from '../../../domain/repertoire/RepertoireViewMapper';
import BlocksMovieCard from './BlocksMovieCard';
import PartsButton from '../../parts/PartsButton';
import PartsLoadingSpinner from '../../parts/PartsLoadingSpinner';

export default function BlocksRepertoire() {
  const [projections, setProjections] = useState<any>([]);
  const [filterProjections, setFilterProjections] = useState<any>([]);
  const [dates, setDates] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const setFirstValueForMovies = async () => {
    if (filterProjections) {
      const date = new Date();
      const currentDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;

      let projection = await RepertoireService.getAllProjectionsByDate(
        currentDate
      );
      let mappedProjections = RepertoireViewMapper.map(projection?.movies);
      setFilterProjections(mappedProjections);
    }
  };
  const fetchProjections = async () => {
    let allProjections = await RepertoireService.getAllProjections();
    setProjections(allProjections);
    setFirstValueForMovies();
    setLoading(false);
  };

  const fetchDates = async () => {
    let dates = await RepertoireService.getProjectionsDate();
    setDates(dates);
  };

  const filterMovie = (param: string) => {
    const update = projections.filter((dat: any, index: number) => {
      return dat.date === param;
    });
    setFilterProjections(update);
  };

  useEffect(() => {
    fetchProjections();
    fetchDates();
  }, []);
  return (
    <div>
      <div className="caption-field">
        <h4 className="caption pl-5 pt-4">Na repertoaru</h4>
      </div>
      <div className="container">
        <div className="repertoire-day mt-4 col-lg-10">
          <div className="row">
            {dates.map((date: any, index: number) => {
              return (
                <div className="col-md-3 col-sm-4 mb-4">
                  <PartsButton
                    filterMovie={filterMovie}
                    filterParam={date.date}
                    date={date.date}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {!isLoading ? (
        filterProjections.map((projections: any, index: number) => {
          return (
            <BlocksMovieCard
              movie={projections}
              key={index}
              broadcast={false}
              duration={true}
            />
          );
        })
      ) : (
        <PartsLoadingSpinner />
      )}
    </div>
  );
}
