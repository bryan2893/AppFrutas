import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FruitsApiService {

  private apiURL = 'http://192.168.1.113:5000/fruits/recognize';

  constructor(private httpClient:HttpClient) { }
  /*
  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }
  */

  sendImage(image: string){
    return this.httpClient.post(this.apiURL, image);
  }
}
