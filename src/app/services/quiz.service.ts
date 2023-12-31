import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  getQuezlist(){
    return this.http.get(`http://localhost:3000/Quizes`)
  }
  saveQuiz(quiz:any){
    return this.http.post(`http://localhost:3000/Quizes`,quiz)
  }
}
