import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FruitsApiService {

  private apiURL = 'http://192.168.1.113:5000/fruits/recognize';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  });


  constructor(private httpClient: HttpClient) { }


  sendImage(image: string) {
    return this.httpClient.post(this.apiURL, image, { headers: this.headers });
  }
}
