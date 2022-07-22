import { Component, OnInit } from '@angular/core';
import { VcourseapiService } from '../vcourseapi.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
course={
coursetitle:"",
courseDescription:"",
courseDuration:"",
coursedate:"",
coursevenue:""
}
  constructor(private service:VcourseapiService) { }

  ngOnInit(): void {
  }
  Addcourse(){
    this.service.addcourse(this.course)
    .subscribe ((data)=>{
    })
    console.log(this.course);
    alert("Success");
  
}

}
