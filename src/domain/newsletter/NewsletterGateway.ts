import ApiClient from '../../utils/http/ApiClient';

export default class NewsletterGateway {
  async newsletter(data: any) {
    return await ApiClient.post(`/api/newsletter`, data);
  }
}
