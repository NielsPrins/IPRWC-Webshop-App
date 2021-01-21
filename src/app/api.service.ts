import {Injectable} from '@angular/core';
import axios, {AxiosResponse} from 'axios';
import {Cookie} from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiServerUrl = 'http://localhost:5000/';

  constructor() {
  }

  private initApi() {
    return axios.create({
      baseURL: this.apiServerUrl,
      headers: {
        Authorization: 'Bearer ' + Cookie.get('user_token'),
      }
    });
  }

  public get(url: string): Promise<AxiosResponse> {
    const axios = this.initApi();
    return axios.get(url);
  }

  public post(url: string, data?: any): Promise<AxiosResponse> {
    const axios = this.initApi();
    return axios.post(url, data);

  }

  public put(url: string, data?: any): Promise<AxiosResponse> {
    const axios = this.initApi();
    return axios.put(url, data);

  }

  public patch(url: string, data?: any): Promise<AxiosResponse> {
    const axios = this.initApi();
    return axios.patch(url, data);

  }

  public delete(url: string): Promise<AxiosResponse> {
    const axios = this.initApi();
    return axios.delete(url);
  }

}
