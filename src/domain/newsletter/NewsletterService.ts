import NewsletterGateway from './NewsletterGateway';

export default class Service {
  static newsletter(data: any) {
    return new NewsletterGateway().newsletter(data);
  }
}
