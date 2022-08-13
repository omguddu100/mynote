import { Component, OnInit } from '@angular/core';

import { Observable ,Subject} from 'rxjs';
import{ ajax} from 'rxjs/ajax'
import { of } from 'rxjs'
import {map, mapTo} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-learn-rxjs',
  templateUrl: './learn-rxjs.component.html',
  styleUrls: ['./learn-rxjs.component.scss']
})
export class LearnRxjsComponent implements OnInit {

  constructor(private httpService:HttpClient) { }

  ngOnInit() {
    //https://www.youtube.com/watch?v=DWLJegTWVxM&list=PLC8OkhrVTHNHi6Do0etu_wMvAvjdjukQp&index=31
    //observables is unit cast
    //  const observable = new Observable(obj=>obj.next(Math.random()))
    //  // subscriber 1
    //  observable.subscribe(d=>console.log(d))
    //  // subscriber 2
    //  observable.subscribe(d=>console.log(d))
    //  observable.subscribe(function(a){
    //    console.log(a)
    //  })

    //========Subject==========
    //  const subject=new Subject()

    //  //subscriber 1 
    //  subject.subscribe(d=>console.log(d))

    //  //subscriber 2 
    //  subject.subscribe(d=>console.log(d))
    //  subject.next(Math.random())

     //
     
     const subjectOnceCall=new Subject()
     const data= ajax('https://jsonplaceholder.typicode.com/users')
     subjectOnceCall.subscribe(d=>console.log(d))
     

     const result=data.subscribe(subjectOnceCall)
     //https://jsonmock.hackerrank.com/api/stocks?=data=5-January-2000

     //Tremendous
     
    const arr=[7,4,4,5,6,4,5,6,]
    const obs= of(arr)
    console.log(obs)

    //========Map & mapTo operator ========

    //of(1,2,3,4,5).pipe(map((v)=>v)).subscribe(console.log)
    console.log("=======Map==========")
    this.httpService.get('https://jsonplaceholder.typicode.com/todos')
    .pipe(map((res:any)=>res.map((data:any)=>{
      return{
        id:data.id,
        completed: data.completed
      }
    }))).subscribe(console.log)
   
    //=====mapTo======
    /**
     * mapTop is similar to map but it will return always singale value 
     */
     of(1,2,3,4,5,6).pipe(mapTo((v:any)=>v+2)).subscribe(console.log)

     //==========SwitchMap========
     

  }



  /**
   * ========RXJS Observables=======
   *  Observables are very useful to handle a varity of common asynchronous operations
   *  But its default behavuours(Unitcast) cant's be used in all scenarios 
   * ======differnt ======
   *   Subject- subject are multucast 
   *   Observables: observables are unit cast
   * 
   * ======Subject===
   * A subject is like an Observble, but can multicast to many Observers
   * 
   *  Mul
   *  
   */

}
