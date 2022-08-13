import { Component ,OnInit } from "@angular/core";

@Component({
    selector:'app-Home',
    templateUrl:'./Home.component.html'

})
export class HomeComponent implements OnInit {
    constructor(){

    }
    ngOnInit():void{}

    table1:string="This is table one "
    HomeObj:any=[
        {name:"Manish", address:"Gaya"},
        {name:"Guddu", address:"Patana"},
        {name:"Guddu", address:"Patana"}
    ]
    
    table2:string="This is table Two "
    HomeObj1:any=[
        {name:"Rahul", address:"Orisssa"},
        {name:"Suresh", address:"Roopena"},
        {name:"Rakesh", address:"Kolkta"}
    ]

}