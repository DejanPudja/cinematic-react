import MovieEntity from './MovieEntity';

export default class MovieViewMapper {
  static map(movies: Array<MovieEntity>) {
    if (movies === undefined) return [];
    return movies.map((movie: MovieEntity) => {
      return {
        id: movie.id,
        title: movie.title,
        english_title: movie.english_title,
        director: movie.director,
        actors: movie.actors,
        genre: movie.genre,
        duration: movie.duration,
        distributor: movie.distributor,
        country_of_origin: movie.country_of_origin,
        year_of_production: movie.year_of_production,
        description: movie.description,
        trailer: movie.trailer,
        coming_soon: movie.coming_soon,
        broadcast_date: movie.broadcast_date,
        image: movie.image,
      };
    });
  }
}
