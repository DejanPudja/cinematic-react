import MovieGateway from './MovieGateway';
import MovieFactory from './MovieFactory';
import MovieRepository from './MovieRepository';

export default class MovieService {
  static getAllMovies() {
    return new MovieRepository(
      new MovieGateway(),
      new MovieFactory()
    ).getAllMovies();
  }
  static getComingSoonMovies() {
    return new MovieRepository(
      new MovieGateway(),
      new MovieFactory()
    ).getComingSoonMovies();
  }
  static getMovieById(id: any) {
    return new MovieGateway().getMovieById(id);
  }
  static addMovies(data: any) {
    return new MovieGateway().addMovies(data);
  }
  static deleteMovie(id: any) {
    return new MovieGateway().deleteMovie(id);
  }
  static editMovie(data: any) {
    return new MovieGateway().editMovie(data);
  }
}
