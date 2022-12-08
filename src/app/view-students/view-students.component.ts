import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent {

  constructor(private api:ApiService){
    api.fetchStudents().subscribe(
      (response)=>{
        this.students=response
      }
    )
  }

  students:any=[]
}
