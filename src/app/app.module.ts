import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchStudentComponent } from './search-student/search-student.component';

const myRoute:Routes=[
  {
    path:"",
    component:AddStudentsComponent
  },
  {
    path:"view",
    component:ViewStudentsComponent
  },
  {
    path:"search",
    component:SearchStudentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    NavbarComponent,
    ViewStudentsComponent,
    SearchStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
