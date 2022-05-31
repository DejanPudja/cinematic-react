import { useNavigate } from 'react-router';

interface MovieType {
  movie: any;
}
export default function BlocksHomeMovieCard({ movie }: MovieType) {
  const navigate = useNavigate();
  const redirect = () => {
    navigate(`/film/${movie.id}`);
  };
  return (
    <div className="col-lg-3 col-sm-6 col-md-4 mt-3 ">
      <div className="card-movie ">
        <div className="image-field text-center">
          <img
            src={movie.image}
            alt="movie"
            className="card-movie-image mt-2"
          />
        </div>
        <div className="card-title mb-5 mt-4 ">
          <span>{movie.title}</span>
        </div>
        <div className="btn-field mb-4 ">
          {movie.coming_soon === 'Ne' ? (
            <>
              <button className="card-btn btn-detail mb-2" onClick={redirect}>
                Detaljnije
              </button>
              <button className="card-btn btn-detail active" onClick={redirect}>
                Rezervisi odmah
              </button>
            </>
          ) : (
            <button className="card-btn btn-detail" onClick={redirect}>
              Detaljnije
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
