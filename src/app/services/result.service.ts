import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ResultService {
  url = 'http://localhost:3000/Results'

  constructor(private http: HttpClient) { 

  }
  finalAnswer(result:any){
      return this.http.post(`http://localhost:3000/Results`,result)
  }

  viewSubmittedQuiz(){
    return this.http.get(`http://localhost:3000/Results`)
  }
  viewResultById(id:any){
    return this.http.get(`http://localhost:3000/Results/user`,)
  }
  getDataById(id: string): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      map(data => data.find((item: { id: string; }) => item.id === id))
    );
    
  }
}
