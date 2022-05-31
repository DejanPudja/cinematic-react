import NewsGateway from './NewsGateway';
import NewsFactory from './NewsFactory';

export default class NewsRepository {
  _gateway: NewsGateway;
  _factory: NewsFactory;
  constructor(gateway: NewsGateway, factory: NewsFactory) {
    this._gateway = gateway;
    this._factory = factory;
  }
  async getAllNews(paginate: number) {
    return this._factory.reconstitute(await this._gateway.getAllNews(paginate));
  }
}
