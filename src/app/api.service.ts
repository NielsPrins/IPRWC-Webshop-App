import {Injectable} from '@angular/core';
import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {Cookie} from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiServerUrl = 'https://iprwc-api.nielsprins.com/';

  constructor() {
  }

  private initApi(): AxiosInstance {
    return axios.create({
      baseURL: this.apiServerUrl,
      headers: {
        Authorization: 'Bearer ' + Cookie.get('user_token'),
      }
    });
  }

  public get(url: string): Promise<AxiosResponse> {
    const api = this.initApi();
    return api.get(url);
  }

  public post(url: string, data?: any): Promise<AxiosResponse> {
    const api = this.initApi();
    return api.post(url, data);

  }

  public put(url: string, data?: any): Promise<AxiosResponse> {
    const api = this.initApi();
    return api.put(url, data);

  }

  public patch(url: string, data?: any): Promise<AxiosResponse> {
    const api = this.initApi();
    return api.patch(url, data);

  }

  public delete(url: string): Promise<AxiosResponse> {
    const api = this.initApi();
    return api.delete(url);
  }

}
