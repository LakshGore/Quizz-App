import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { 
    
  }

  addQuestion(question:any){
    return  this.http.post(`http://localhost:3000/questions`,question)
  }
  getAllQuestions(){
    return this.http.get(`http://localhost:3000/questions`)
  }
  
}
