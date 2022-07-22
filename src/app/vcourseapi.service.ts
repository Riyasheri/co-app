import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VcourseapiService {

  constructor(private http:HttpClient ) { }
  Viewcourse=()=>
  {
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
  addcourse(course:any){
    return this.http.post("https:://mylinkurcodesapp.herokuapp.com/addcourse",course);
  }

}
