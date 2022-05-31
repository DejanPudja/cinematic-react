import ApiClient from '../../utils/http/ApiClient';

export default class RepertoireGateway {
  async getAllProjectionsByDate(date: any) {
    let data = await ApiClient.get(`/api/filmovi/${date}`);
    return data.data.data;
  }
  async getAllProjections() {
    let data = await ApiClient.get(`/api/filmovi`);
    return data.data.data;
  }
  async getProjectionByMovieId(id: any) {
    let data = await ApiClient.get(`/api/projection/${id}`);
    return data.data.data;
  }
  async getProjectionById(id: any) {
    let data = await ApiClient.get(`/api/get-projection/${id}`);
    return data.data.data[0];
  }
  async getProjectionsDate() {
    let data = await ApiClient.get(`/api/date`);
    return data.data.data;
  }
  async addProjection(data: any) {
    await ApiClient.post(`/api/add-projection`, data);
  }
  async deleteProjection(id: any) {
    await ApiClient.post(`/api/delete-projection/${id}`);
  }
  async editProjection(data: any) {
    await ApiClient.put(`/api/edit-projection`, data);
  }
}
