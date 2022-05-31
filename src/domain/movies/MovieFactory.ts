import MovieEntity from './MovieEntity';

type MovieType = {
  id: number;
  title: string;
  english_title: string;
  director: string;
  actors: string;
  genre: string;
  duration: number;
  distributor: string;
  country_of_origin: string;
  year_of_production: number;
  description: string;
  trailer: string;
  coming_soon: string;
  image: string;
  broadcast_date: any;
};
export default class MovieFactory {
  reconstitute(data: any) {
    const movies: any = [];

    if (data && data.length > 0) {
      data.forEach((movie: MovieType) => {
        const movieIstance = this.makeEmpty();

        movieIstance
          .setId(movie.id)
          .setTitle(movie.title)
          .setDirector(movie.director)
          .setActors(movie.actors)
          .setGenre(movie.genre)
          .setDuration(movie.duration)
          .setDistributor(movie.distributor)
          .setCountryOfOrigin(movie.country_of_origin)
          .setYearOfProduction(movie.year_of_production)
          .setDescription(movie.description);
        movieIstance
          .setBroadcastDate(movie.broadcast_date)
          .setTrailer(movie.trailer);
        movieIstance.setImage(movie.image);
        movieIstance.setComingSoon(movie.coming_soon);
        movieIstance.setEnglishTitle(movie.english_title);
        movies.push(movieIstance);
      });
      return { movies };
    }
  }
  makeEmpty() {
    return new MovieEntity();
  }
}
