import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = "https://api.sheety.co/4db58997dd33ab7eaa3d621c48bdea06/booking/sheet1"

  createBooking(data:any){
    const sentData = {
      "sheet1":data
    }
    return this.httpClient.post(this.baseUrl, sentData)
 
  }

  getAll(){
    return this.httpClient.get(this.baseUrl)
  }
 
  getById(id:number){
    return this.httpClient.get(`${this.baseUrl}/${id}`)
  }
 
 
}
