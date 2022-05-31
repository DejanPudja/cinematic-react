import MovieEntity from '../movies/MovieEntity';

export default class RepertoireEntity extends MovieEntity {
  private _repertoire_id: number;
  private _movie_id: number;
  private _date: string;
  private _time: string;
  private _hall: number;
  private _price: number;

  get repertoireId() {
    return this._repertoire_id;
  }
  setRepertoireId(value: number) {
    this._repertoire_id = value;
    return this;
  }
  get movie_id() {
    return this._movie_id;
  }
  setMovieId(value: number) {
    this._movie_id = value;
    return this;
  }
  get date() {
    return this._date;
  }
  setDate(value: string) {
    this._date = value;
    return this;
  }
  get time() {
    return this._time;
  }
  setTime(value: string) {
    this._time = value;
    return this;
  }
  get hall() {
    return this._hall;
  }
  setHall(value: number) {
    this._hall = value;
    return this;
  }
  get price() {
    return this._price;
  }
  setPrice(value: number) {
    this._price = value;
    return this;
  }
}
