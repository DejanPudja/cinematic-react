import ApiClient from '../../utils/http/ApiClient';

export default class MovieGateway {
  async getAllMovies() {
    let data = await ApiClient.get('/api/movie');
    return data.data.data;
  }
  async getComingSoonMovies() {
    let data = await ApiClient.get('/api/coming-soon');
    return data.data.data;
  }
  async getMovieById(id: any) {
    let data = await ApiClient.get(`/api/film/${id}`);
    return data.data;
  }
  async addMovies(data: any) {
    await ApiClient.post(`/api/add-movie`, data);
  }
  async deleteMovie(id: any) {
    await ApiClient.post(`/api/delete-movie/${id}`);
  }
  async editMovie(data: any) {
    await ApiClient.put(`/api/edit-movie/`, data);
  }
}
