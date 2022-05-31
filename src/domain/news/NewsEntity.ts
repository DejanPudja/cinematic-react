export default class NewsEntity {
  private _id: number;
  private _title: string;
  private _date: string;
  private _description: string;
  private _image: string;

  get id() {
    return this._id;
  }
  setId(value: number) {
    this._id = value;
  }
  get title() {
    return this._title;
  }
  setTitle(value: string) {
    this._title = value;
  }
  get date() {
    return this._date;
  }
  setDate(value: string) {
    this._date = value;
  }
  get description() {
    return this._description;
  }
  setDescription(value: string) {
    this._description = value;
  }
  get image() {
    return this._image;
  }
  setImage(value: string) {
    this._image = value;
  }
}
