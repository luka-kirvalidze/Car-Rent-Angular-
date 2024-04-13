import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getRecomended(){
    return this.http.get('https://rentcar.stepprojects.ge/api/Car/popular');
  }
  getAll(){
    return this.http.get('https://rentcar.stepprojects.ge/api/Car');
  }
  getFakeUsers(){
    return this.http.get('http://localhost:8888/users') //იღებს ინფორმაციას ჩემი გაკეთებული api endpointიდან. საჭიროა api ლოქალ ჰოსტზე გაშვება.
  }
}
