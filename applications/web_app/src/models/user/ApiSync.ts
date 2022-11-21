import axios, { AxiosPromise } from 'axios';
import { IHasId } from '../../base/IHasId';
import { ISync } from '../../base/Model';

export class ApiSync<T extends IHasId> implements ISync<T> {
  constructor(public rootUrl: string) {}
  // get User from db to a webpage
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  //save a user to db
  save(data: T): AxiosPromise {
    const id = data.id; //NOTE: or we can type const { id } = data;

    if (id) {
      //put (update data)
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      //post
      return axios.post(`${this.rootUrl}`, data);
    }
  }
}
