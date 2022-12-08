import { Component } from '@angular/core';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent {

  name=""
  rollNo=""
  admissionNumber=""
  mobilenumber=""
  college=""
  

  readValues=()=>{
    let data:any={"name":this.name,"rollNo":this.rollNo,"admissionNumber":this.admissionNumber,"mobilenumber":this.mobilenumber,"college":this.college}
    console.log(data)
  }
}
