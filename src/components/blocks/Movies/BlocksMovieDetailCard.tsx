export default function BlocksMovieDetailCard({ movie }: any) {
  return (
    <div className="movie-detail-box col-lg-12 mt-5">
      <h4 className="card-title movie-title mt-3">{movie.title}</h4>
      <div className="row">
        <div className=" col-lg-6 text-field ">
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
            <li className="info ">
              Trajanje:<span>{movie.duration}</span>
            </li>
            <li className="info ">
              Distributer: <span>{movie.distributor}</span>
            </li>
            <li className="info">
              Zemlja porekla: <span>{movie.country_of_origin}</span>
            </li>
            <li className="info">
              Godina proizvodnje: <span>{movie.year_of_production}</span>
            </li>
          </ul>
        </div>
        <div className="col-lg-5 image-field ">
          <span className="">Sinopsis:</span>
          <p className="description mt-2">{movie.description}</p>
        </div>
      </div>
    </div>
  );
}
