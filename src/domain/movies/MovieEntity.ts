export default class MovieEntity {
  private _id: number;
  private _title: string;
  private _english_title: string;
  private _director: string;
  private _actors: string;
  private _genre: string;
  private _duration: number;
  private _distributor: string;
  private _country_of_origin: string;
  private _year_of_production: number;
  private _description: string;
  private _trailer: string;
  private _coming_soon: string;
  private _image: string;
  private _broadcast_date: any;

  get id() {
    return this._id;
  }
  setId(value: number) {
    this._id = value;
    return this;
  }
  get title() {
    return this._title;
  }
  setTitle(value: string) {
    this._title = value;
    return this;
  }
  get english_title() {
    return this._english_title;
  }
  setEnglishTitle(value: string) {
    this._english_title = value;
    return this;
  }
  get director() {
    return this._director;
  }
  setDirector(value: string) {
    this._director = value;
    return this;
  }
  get actors() {
    return this._actors;
  }
  setActors(value: string) {
    this._actors = value;
    return this;
  }
  get genre() {
    return this._genre;
  }
  setGenre(value: string) {
    this._genre = value;
    return this;
  }
  get duration() {
    return this._duration;
  }
  setDuration(value: number) {
    this._duration = value;
    return this;
  }
  get distributor() {
    return this._distributor;
  }
  setDistributor(value: string) {
    this._distributor = value;
    return this;
  }
  get country_of_origin() {
    return this._country_of_origin;
  }
  setCountryOfOrigin(value: string) {
    this._country_of_origin = value;
    return this;
  }
  get year_of_production() {
    return this._year_of_production;
  }
  setYearOfProduction(value: number) {
    this._year_of_production = value;
    return this;
  }
  get description() {
    return this._description;
  }
  setDescription(value: string) {
    this._description = value;
  }
  get trailer() {
    return this._trailer;
  }
  setTrailer(value: string) {
    this._trailer = value;
  }
  get coming_soon() {
    return this._coming_soon;
  }
  setComingSoon(value: string) {
    this._coming_soon = value;
  }
  get image() {
    return this._image;
  }
  setImage(value: string) {
    this._image = value;
  }
  get broadcast_date() {
    return this._broadcast_date;
  }
  setBroadcastDate(value: any) {
    this._broadcast_date = value;
    return this;
  }
}
