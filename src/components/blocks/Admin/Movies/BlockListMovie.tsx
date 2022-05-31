import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import MovieService from '../../../../domain/movies/MovieService';
import { useNavigate } from 'react-router';

export default function BlockListMovie({ movie, fetchMovies, notify }: any) {
  const navigate = useNavigate();
  const deleteMovie = () => {
    MovieService.deleteMovie(movie.id).then(() => {
      fetchMovies();
      notify();
    });
  };
  const editMovie = () => {
    navigate(`/izmeni-film/${movie.id}`);
  };
  return (
    <tr>
      <th>{movie.id}</th>
      <td>{movie.title}</td>
      <td>{movie.genre}</td>
      <td>{movie.duration} minuta</td>
      <th>{movie.coming_soon}</th>
      <th>{movie.broadcast_date}</th>
      <th>
        <FontAwesomeIcon
          icon={faTrash}
          className="icon-delete"
          onClick={deleteMovie}
        />
        <FontAwesomeIcon
          icon={faEdit}
          className="icon-edit"
          onClick={editMovie}
        />
      </th>
    </tr>
  );
}
