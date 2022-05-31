import ApiClient from '../../utils/http/ApiClient';

export default class NewsGateway {
  async getAllNews(paginate: number) {
    let data = await ApiClient.get(`/api/news/${paginate}`);
    return data.data.data.data;
  }
  async addNews(data: any) {
    await ApiClient.post('/api/add-news', data);
  }
  async deleteNews(id: any) {
    await ApiClient.post(`/api/delete-news/${id}`);
  }
  async getNewsById(id: any) {
    let data = await ApiClient.get(`/api/news/${id}`);
    return data.data;
  }
  async editNews(data: any) {
    await ApiClient.put(`/api/edit-news`, data);
  }
}
