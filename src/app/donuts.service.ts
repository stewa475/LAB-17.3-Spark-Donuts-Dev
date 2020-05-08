import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results, Donut, Donuts } from './interfaces/donuts';

@Injectable({
  providedIn: 'root',
})
export class DonutsService {
  apiUrl: string = 'https://grandcircusco.github.io/demo-apis/donuts';

  constructor(private http: HttpClient) {}

  getDonuts() {
    return this.http.get<Results>(`${this.apiUrl}.json`);
  }

  getOneDonut(id:number) {
    return this.http.get<Donut>(`${this.apiUrl}/${id}.json`);
  }
}
