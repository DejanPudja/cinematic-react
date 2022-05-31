import { useNavigate } from 'react-router-dom';
interface MoviesType {
  movie: any;
  broadcast: boolean;
  duration: boolean;
}
export default function BlocksMovieCard({
  movie,
  broadcast,
  duration,
}: MoviesType) {
  const navigate = useNavigate();
  const broadcastDate = () => {
    if (broadcast) {
      return (
        <li className="info color-yellow" style={{ color: '#fab702' }}>
          Početak emitovanja: <span>{movie.broadcast_date}</span>
        </li>
      );
    }
  };
  const durationMovie = () => {
    if (duration) {
      return (
        <li className="info color-yellow">
          Trajanje: <span>{movie.duration}</span>
        </li>
      );
    }
  };
  return (
    <div className="container-fluid">
      <div className="box col-lg-8 mt-5">
        <div className="row">
          <div className="col-lg-4 image-field text-center">
            <img src={movie.image} alt="movie" className="movie-image" />
          </div>
          <div className="col-lg-4 text-field">
            <h4 className=" movie-title mt-3">{movie.title}</h4>
            <p>{movie.english_title}</p>
            <ul className="decription mt-5">
              <li className="info">
                Režiser: <span>{movie.director}</span>
              </li>
              <li className="info">
                Glumci: <span>{movie.actors}</span>
              </li>
              <li className="info">
                Žanr: <span>{movie.genre}</span>
              </li>
              <li className="info">
                Distributer: <span>{movie.distributor}</span>
              </li>
              <>{durationMovie()}</>
              <li className="info">
                Zemlja porekla: <span>{movie.country_of_origin}</span>
              </li>
              <li className="info">
                Godina proizvodnje: <span>{movie.year_of_production}</span>
              </li>
              <>{broadcastDate()}</>
            </ul>
            <a href="/"></a>
            <button
              className="btn btn-lg btn-block btn-default btn-detail"
              onClick={() => {
                navigate(`/film/${movie.movie_id ? movie.movie_id : movie.id}`);
              }}
            >
              Detaljnije
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-xs-12">
        <hr />
      </div>
    </div>
  );
}
