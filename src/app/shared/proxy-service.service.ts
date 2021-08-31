import { Injectable } from '@angular/core';
import {Cars, Insurance, Users} from "../models/models";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProxyServiceService {

  url: string= "http://localhost:3000"


  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<Users[]>(this.url+"/users");
  }

  getCars(){
    return this.http.get<Cars[]>(this.url+"/cars");
  }

  getInsurances(){
    return this.http.get<Insurance[]>(this.url+"/insurances");
  }

  getUsersById(id?: number){
    return this.http.get<Users>(this.url+"/users/"+id);
  }

  getCarById(id?: number){
    return this.http.get<Cars>(this.url+"/cars/"+id);
  }

}
