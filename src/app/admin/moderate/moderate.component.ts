import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/result.service';
import { QuizService } from 'src/app/services/quiz.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-moderate',
  templateUrl: './moderate.component.html',
  styleUrls: ['./moderate.component.css']
})
export class ModerateComponent implements OnInit {

  isReuslt = false
  resultArr: any = []
  queData: any[] = []
  isEmptyArr = false

  constructor(private quizService: QuizService, private router: Router,
    private resultService: ResultService) {

  }

  ngOnInit(): void {
    
    this.isReuslt = true
    this.resultService.viewSubmittedQuiz().subscribe((data) => {
      // console.log(data);
      this.resultArr = data
      console.log(this.resultArr);
      if (this.resultArr.length < 1) {
        this.isEmptyArr = true

      }
      else
        this.isEmptyArr = false
    })
    console.log(this.resultArr);
  }
  viewResult(id: any) {

    console.log("id => " + id);

    let userResult: any = []
    this.resultService.getDataById(id).subscribe((data) => {
      userResult = data
      // console.log("by id");

      console.log(userResult);
      // let queData: any = []
      const len = userResult.data.length;
      for (let i = 0; i < len; i++) {
        this.queData[i] = userResult.data[i]
        console.log(this.queData[i]);
      }
    })
    // console.log(this.queData+"this.queData[i]");
    this.isReuslt = false

  }
  checkQuizzes() {

    this.resultService.viewSubmittedQuiz().subscribe((data) => {
      // console.log(data);
      this.resultArr = data
      console.log(this.resultArr);
      if (this.resultArr.length < 1) {
        this.isEmptyArr = true

      }
      else
        this.isEmptyArr = false
    })
    console.log(this.resultArr);

  }
}
