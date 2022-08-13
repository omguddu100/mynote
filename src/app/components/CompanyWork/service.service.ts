import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'
import { Observable} from "rxjs"


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

   url:string='https://jsonmock.hackerrank.com/api/stocks?=data=5-January-2000';
   url2 ='https://jsonplaceholder.typicode.com/users';

  // GetData(){
  //   //return this.http.get(this.url2);
    
  // }
  GetData(): Observable<any> {
    return this.http.get(this.url)
  }

}
