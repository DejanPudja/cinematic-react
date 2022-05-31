export default class Authentication {
  static userAuth() {
    const user = localStorage.getItem('token');
    if (user) {
      return true;
    } else {
      return false;
    }
  }
  static adminAuth() {
    const admin = localStorage.getItem('token');
    if (admin) {
      return true;
    } else {
      return false;
    }
  }
  static setRole(role: any) {
    localStorage.setItem('role', role);
  }
  static getRole() {
    return localStorage.getItem('role');
  }
  static setToken(token: string) {
    localStorage.setItem('token', token);
  }
  static getToken() {
    return localStorage.getItem('token');
  }
  static setUserId(id: any) {
    localStorage.setItem('user_id', id);
  }
  static getUserId() {
    return localStorage.getItem('user_id');
  }
}
