import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LearnRxjsComponent } from './components/RxjsModule/learn-rxjs/learn-rxjs.component';
import { TaskComponent } from './components/CompanyWork/task/task.component';
import { Task1Component } from './components/CompanyWork/task1/task1.component';
import { ServiceService } from './components/CompanyWork/service.service';
import { FindPipe } from './components/CompanyWork/find.pipe';
import { HomeComponent} from './components/ReusableComp/Home/home.component'
import { TableComponent } from './components/ReusableComp/table/table.component';
import { HighlightDirective } from './components/ReusableComp/highlight.directive';
import { SubMenuComponent } from './shared/components/sub-menu/sub-menu.component';
import { CssFlexComponent,InterHtmlComponent ,CssScssdComponent} from './components/Design';



@NgModule({
  declarations: [
    AppComponent,
    LearnRxjsComponent,
    TaskComponent,
    Task1Component,
    FindPipe,
    HomeComponent,
    TableComponent,
    HighlightDirective,
    SubMenuComponent,
    CssFlexComponent,
    CssScssdComponent,
    InterHtmlComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
