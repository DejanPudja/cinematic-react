import ReservationGateway from './ReservationGateway';

export default class ReservationService {
  static addReservation(data: any) {
    return new ReservationGateway().addReservation(data);
  }
  static getReservationById(id: number) {
    return new ReservationGateway().getReservationById(id);
  }
  static getUserReservation(id: number) {
    return new ReservationGateway().getUserReservation(id);
  }
  static deleteReservation(id: number) {
    return new ReservationGateway().deleteReservation(id);
  }
}
