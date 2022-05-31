import ApiClient from '../../utils/http/ApiClient';

export default class AuthGateway {
  async register(data: any) {
    return await ApiClient.post(`/api/register`, data);
  }
  async login(data: any) {
    return await ApiClient.post(`/api/login`, data);
  }
  async logout() {
    return await ApiClient.post(`/api/logout`);
  }
  async getUserById(id: number) {
    let data = await ApiClient.get(`/api/user/${id}`);
    return data.data.data[0];
  }
  async editUser(data: any) {
    return await ApiClient.put(`/api/edit-user`, data);
  }
}
