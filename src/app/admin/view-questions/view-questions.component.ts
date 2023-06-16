import { Component,OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {


  selectedQuiz: any
  selectedQuestionType !: string
  arrQuizType: any[] = []
  flagToView!: boolean;
  arrAllQuestions: any = [];


  constructor(private adminService: AdminService) {

  }

  ngOnInit() {

    let tempArr: any[] = []

    // console.log("this.selectedQuiz => " + this.selectedQuiz);

    this.adminService.getAllQuestions().subscribe((data) => {
      // console.log(data);
      this.arrAllQuestions = data

      console.log( this.arrAllQuestions);

    })
    for (let i = 0; i < this.arrAllQuestions.length; i++) {
      console.log("this.arrAllQuestions[i] => " + this.arrAllQuestions[i].value);

      tempArr[i] = { ...this.arrAllQuestions[i] }
      Object.entries(tempArr[i])
        .filter(([key, value]) => value === '' || value === null || value === undefined)
        .forEach(([key, value]) => delete tempArr[i][key]);
      console.log("tempArr[i] => " + tempArr[i]);

    }


  }
}
