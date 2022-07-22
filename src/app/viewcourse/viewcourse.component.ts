import { Component, OnInit } from '@angular/core';
import { VcourseapiService } from '../vcourseapi.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

  constructor(private api:VcourseapiService) { 
    api.Viewcourse().subscribe(
      (Response)=>{
        this.data=(Response)
      }
    )
  }

  ngOnInit(): void {
  }
  data:any=[]

}
