import {Injectable} from '@angular/core';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import jwt_decode from 'jwt-decode';

interface userData {
  id: string;
  name: string;
  email: string;
  permission_group: string;
}

@Injectable()
export class AppService {
  private user: userData;
  public shoppingCart = [];

  constructor() {
  }

  public setUser(token: string) {
    Cookie.set('user_token', token, 7, '/');
    this.user = jwt_decode(token);
  }

  public getUser() {
    if (!this.user) {
      const token = Cookie.get('user_token');
      if (token) {
        this.user = jwt_decode(token);
      }
    }
    return this.user;
  }
}
