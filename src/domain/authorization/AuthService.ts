import AuthGateway from '../authorization/AuthGateway';

export default class AuthService {
  static register(data: any) {
    return new AuthGateway().register(data);
  }
  static login(data: any) {
    return new AuthGateway().login(data);
  }
  static logout() {
    return new AuthGateway().logout();
  }
  static getUserById(id: number) {
    return new AuthGateway().getUserById(id);
  }
  static editUser(data: any) {
    return new AuthGateway().editUser(data);
  }
}
