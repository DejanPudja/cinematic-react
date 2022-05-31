import RepertoireGateway from './RepertoireGateway';
import RepertoireFactory from './RepertoireFactory';

export default class RepertoireRepository {
  _gateway: RepertoireGateway;
  _factory: RepertoireFactory;
  constructor(gateway: RepertoireGateway, factory: RepertoireFactory) {
    this._gateway = gateway;
    this._factory = factory;
  }
  async getAllProjectionsByDate(date: any) {
    return this._factory.reconstitute(
      await this._gateway.getAllProjectionsByDate(date)
    );
  }
}
