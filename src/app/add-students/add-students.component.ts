import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent {

  name=""
  rollNo=""
  admissionNumber=""
  college=""

  constructor(private api:ApiService){}
  

  readValues=()=>{
    let data:any={"name":this.name,"rollNo":this.rollNo,"admissionNumber":this.admissionNumber,"college":this.college}
    console.log(data)
    this.api.addCourse(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("student added successfully")
          this.name=""
          this.rollNo=""
          this.admissionNumber=""
          this.college=""
        } else {
          alert("something went wrong")
        }
      }
    )
  }
}
