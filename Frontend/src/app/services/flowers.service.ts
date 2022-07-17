import { Injectable } from '@angular/core';
import { sample_flowers } from 'src/data';
import { Flower } from '../shared/models/Flowers';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlowersService {

  constructor(private http: HttpClient) { } //private httpClient: HttpClient

  // getAll():Flower[] {
  //   return sample_flowers;
  // }

  getAllFlowers(): Observable<Flower[]> {
    return this.http.get<Flower[]>('http://localhost:3000/flowers');
  }

  getFlowerById(flowerId:string):Observable<Flower>{
    return this.http.get<Flower>('http://localhost:3000/flowers/' + flowerId)   // change in getAllFlowers
  }
}
