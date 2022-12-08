import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent {

  admissionNumber=""

  SearchData:any=[]

  constructor(private api:ApiService,private route:Router){}

  readValues=()=>{
    let data:any={"admissionNumber":this.admissionNumber}
    console.log(data)
    this.api.searchCouse(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("Invalid admission number")
        } else {
          this.SearchData=response
        }
      }
    )
  }
  deleteBtnClick:any=(id:any)=>{
    let data:any={

      "id":id}
      this.api.deleteCouse(data).subscribe(
        (response:any)=>{
          console.log(response)
          if (response.status=="success") {
            alert("student deleted successfully")
            this.SearchData=[]
            this.admissionNumber=""
            this.route.navigate(['/search'])
          } else {
            alert("invalid admission number")
            this.admissionNumber=""
          }
        }
      )
      
      
      
      
      
  }

}
