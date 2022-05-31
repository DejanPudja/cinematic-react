import ApiClient from '../../utils/http/ApiClient';

export default class ReservationGateway {
  async addReservation(data: any) {
    await ApiClient.post(`/api/add-reservation`, data);
  }
  async getReservationById(id: number) {
    let data = await ApiClient.get(`/api/reservations/${id}`);
    return data.data.data;
  }
  async getUserReservation(id: number) {
    let data = await ApiClient.get(`/api/user-reservations/${id}`);
    return data.data.data;
  }
  async deleteReservation(id: number) {
    await ApiClient.post(`/api/delete-reservation/${id}`);
  }
}
