import RepertoireEntity from './RepertoireEntity';

export default class RepertoireViewMapper {
  static map(movies: Array<RepertoireEntity>) {
    if (movies === undefined) return [];
    return movies.map((movie: RepertoireEntity) => {
      return {
        repertoire_id: movie.id,
        movie_id: movie.movie_id,
        date: movie.date,
        time: movie.time,
        hall: movie.hall,
        price: movie.price,
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
