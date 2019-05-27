import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plant } from '../models/plant';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  URI_server = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getPlants() {
    return this.http.get(`${this.URI_server}/list/get`);
  }

  getPlant(id: string) {
    return this.http.get(`${this.URI_server}/list/one/${id}`);
  }
  
  deletePlant(id: string) {
    return this.http.delete(`${this.URI_server}/list/delete/${id}`);
  } 

  savePlant(form: Plant) {
    return this.http.post(`${this.URI_server}/form/add/`, form);
  } 

  updatePlant(id: string, updatePlant: Plant) {
    return this.http.put(`${this.URI_server}/list/update/${id}`, updatePlant);
  }

}
