import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task1Component } from './components/CompanyWork/task1/task1.component';
import { CssFlexComponent } from './components/Design';
import { HomeComponent } from './components/ReusableComp/Home/home.component';
import { LearnRxjsComponent } from './components/RxjsModule/learn-rxjs/learn-rxjs.component';

const routes: Routes = [
 {path:'LeanRxjs', component:LearnRxjsComponent},
 {path:'Task1', component:Task1Component},
 {path :'ReuHome', component:HomeComponent},
 {path:'CssFlex', component:CssFlexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
