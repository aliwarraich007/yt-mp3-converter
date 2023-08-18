import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from './responseModal';
@Injectable({
  providedIn: 'root',
})
export class ConvertService {
  constructor(private http: HttpClient) {}
  convert(id: string) {
    return this.http.get<Response>(
      'https://youtube-mp3-download1.p.rapidapi.com/dl',
      {
        params: new HttpParams().set('id', id),
        headers: new HttpHeaders({
          'X-RapidAPI-Key':
            '3b6b8d14a1msh071f531ab62aacfp15f1dejsn975c0270be2d',
          'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com',
        }),
      }
    );
  }
}
