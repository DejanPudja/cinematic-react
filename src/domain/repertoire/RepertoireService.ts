import RepertoireGateway from './RepertoireGateway';
import RepertoireFactory from './RepertoireFactory';
import RepertoireRepository from './RepertoireRepository';

export default class MovieService {
  static getAllProjectionsByDate(date: any) {
    return new RepertoireRepository(
      new RepertoireGateway(),
      new RepertoireFactory()
    ).getAllProjectionsByDate(date);
  }
  static getAllProjections() {
    return new RepertoireGateway().getAllProjections();
  }
  static getProjectionByMovieId(id: any) {
    return new RepertoireGateway().getProjectionByMovieId(id);
  }
  static getProjectionById(id: any) {
    return new RepertoireGateway().getProjectionById(id);
  }
  static getProjectionsDate() {
    return new RepertoireGateway().getProjectionsDate();
  }
  static addProjection(data: any) {
    return new RepertoireGateway().addProjection(data);
  }
  static deleteProjection(id: any) {
    return new RepertoireGateway().deleteProjection(id);
  }
  static editProjection(data: any) {
    return new RepertoireGateway().editProjection(data);
  }
}
