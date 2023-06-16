import { Component } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-saved-quizzes',
  templateUrl: './saved-quizzes.component.html',
  styleUrls: ['./saved-quizzes.component.css']
})
export class SavedQuizzesComponent {

  
  viewArrQuiz: any = []
  arrQuiz !: any []

  constructor(private quizService: QuizService) {

  }
  ngOnInit(): void {
    this.quizService.getQuezlist().subscribe((data) => {
      console.log("data => " + data);
      this.viewArrQuiz = data

    })
  }

  viewAllQuizzes() {
    this.quizService.getQuezlist().subscribe((data) => {
      // console.log("data => "+data);
      this.viewArrQuiz = data

    })
    console.log(this.viewArrQuiz);
    for (let i = 0; i < this.viewArrQuiz.length; i++) {

      console.log("this.viewArrQuiz[i].quizData"+this.viewArrQuiz[i]);
      
      // this.arrQuiz[i].quizType = this.viewArrQuiz[i].
    }

  }


}
