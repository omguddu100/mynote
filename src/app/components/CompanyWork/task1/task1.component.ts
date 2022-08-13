import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit {
  //Listdata:user[]
  constructor(private service:ServiceService) { 
    //this.getSearchData()
  }
   
 

  // Listdata =[
  //   {id: 1,name: "Manish Kumar", email: "manish@gmail.com"},
  //   {id: 2,name: "Guddu Kumar",email: "guddu@gmail.com"},
  //   {id: 3,name: "Rahul Kumar",email: 'rahul@gmail.com'},
  // ];
  searchkey:any='5-January-20'

  users: any;
 
  ngOnInit() {
    this.service.GetData().subscribe(users => {
      console.log(users.data)
      this.users = users.data
    }); 
  }
}

export interface dataMap {
  id: number,
  name: string,
  username:string,
  phone:string
  email: string,
  address:string,
  company:string,
  website:string
}

export interface user{
  id:number,
  name:string,
  email: string,
}