import NewsGateway from './NewsGateway';
import NewsFactory from './NewsFactory';
import NewsRepository from './NewsRepository';

export default class MovieService {
  static getAllNews(paginate: number) {
    return new NewsRepository(new NewsGateway(), new NewsFactory()).getAllNews(
      paginate
    );
  }
  static addNews(data: any) {
    return new NewsGateway().addNews(data);
  }
  static deleteNews(id: any) {
    return new NewsGateway().deleteNews(id);
  }
  static getNewsById(id: any) {
    return new NewsGateway().getNewsById(id);
  }
  static editNews(data: any) {
    return new NewsGateway().editNews(data);
  }
}
