import MovieGateway from './MovieGateway';
import MovieFactory from './MovieFactory';

export default class MovieRepository {
  _gateway: MovieGateway;
  _factory: MovieFactory;
  constructor(gateway: MovieGateway, factory: MovieFactory) {
    this._gateway = gateway;
    this._factory = factory;
  }
  async getAllMovies() {
    return this._factory.reconstitute(await this._gateway.getAllMovies());
  }
  async getComingSoonMovies() {
    return this._factory.reconstitute(
      await this._gateway.getComingSoonMovies()
    );
  }
  async getMovieById(id: number) {
    return this._factory.reconstitute(await this._gateway.getMovieById(id));
  }
}
