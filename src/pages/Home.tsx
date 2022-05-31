import { useEffect, useState } from 'react';
import BlocksHomeMovieCard from '../components/blocks/Movies/BlocksHomeMovieCard';
import BlocksHomeNews from '../components/blocks/Movies/BlocksHomeNews';
import PartsLoadingSpinner from '../components/parts/PartsLoadingSpinner';
import PartsSlider from '../components/parts/PartsSlider';
import MovieService from '../domain/movies/MovieService';
import MovieViewMapper from '../domain/movies/MovieViewMapper';
import NewsViewMapper from '../domain/news/NewsViewMapped';
import NewsService from '../domain/news/NewsService';

export default function Home() {
  const [movies, setMovies] = useState<any>([]);
  const [filteredMovies, setFilteredMovies] = useState<any>([]);
  const [news, setNews] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchMovies = async () => {
    let movies = await MovieService.getAllMovies();
    let mappedMovies = MovieViewMapper.map(movies?.movies);
    setMovies(mappedMovies);
    sortMovies(mappedMovies);
    setLoading(false);
  };

  const sortMovies = (mappedProjections: any) => {
    if (filteredMovies) {
      let filteredMovie = mappedProjections.filter((data: any) => {
        return data.coming_soon === 'Ne';
      });
      setFilteredMovies(filteredMovie);
    }
  };

  const fetchNews = async () => {
    let news = await NewsService.getAllNews(3);
    let mappedNews = NewsViewMapper.map(news?.allNews);
    setNews(mappedNews);
  };

  const filterMovie = (param: string) => {
    const filterMovies = movies.filter((data: any) => {
      return data.coming_soon === param;
    });
    setFilteredMovies(filterMovies);
  };

  useEffect(() => {
    fetchMovies();
    fetchNews();
  }, []);
  return (
    <div>
      <PartsSlider />
      <div className="parallax">
        <div className="overlay">
          <div className="container">
            <div className="col-lg-12 col-sm-12 text-center ">
              <div className="row ">
                <div className="col-lg-6 col-sm-6 col-xs-6 mt-3 col-auto">
                  <button
                    className="link btn-fields"
                    onClick={() => {
                      filterMovie('Ne');
                    }}
                  >
                    <span className="h5">Aktuelno</span>
                  </button>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-6 mt-3 col-auto">
                  <button
                    className="link btn-fields"
                    onClick={() => {
                      filterMovie('Da');
                    }}
                  >
                    <span className="h5">Uskoro</span>
                  </button>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="box-movies">
              <div className="col-lg-12 col-sm-12 text-center ">
                <div className="row ">
                  {!isLoading ? (
                    filteredMovies
                      .slice(0, 4)
                      .map((movie: any, index: number) => {
                        return (
                          <BlocksHomeMovieCard movie={movie} key={index} />
                        );
                      })
                  ) : (
                    <PartsLoadingSpinner />
                  )}
                  <hr />
                </div>
              </div>
              <div className="col-lg-12 mt-4 text-center">
                <div className="row">
                  <div className="col-lg-6 col-auto mb-4 btn-home-field">
                    <a href="/repertoar" className="card-btn-bottom btn-detail">
                      <span>Pogledaj sve aktuelne filmove</span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-auto mb-5 btn-home-field">
                    <a href="/uskoro" className="card-btn-bottom btn-detail ">
                      <span>Pogledaj sve najave filmova</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div news">
        <div className="container">
          <h2 className=" mt-3 news-caption text-center">Vesti</h2>
          <div className="col-lg-12 news-box ">
            <div className="row mt-5">
              {news.map((news: any, index: number) => {
                return <BlocksHomeNews news={news} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
