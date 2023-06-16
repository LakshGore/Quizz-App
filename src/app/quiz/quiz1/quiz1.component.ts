import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { QuizService } from 'src/app/services/quiz.service';
import { ReminderService } from 'src/app/services/reminder.service';
import { ResultService } from 'src/app/services/result.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.css']
})
export class Quiz1Component {

  correctAnswer = ""
  wrongAnswer = ""
  answerSubmitted = false
  checkAnswer = "false"
  activeQuestion = 0
  // dummyarr: any[] = ['1', '2', '3', '4', '5', '6']
  arrfinalAnswer: any[] = []
  queCounter = 0
  selectedQuestion = false
  currentQue: string = ""
  currentAns: string = ""
  dbData: any
  answerForm!: FormGroup
  arrQuestions: any = []
  flagStartQuiz = false
  isCorrect !: boolean
  flagAnswer = false
  points = 0
  isFinished = false
  totalPoints = 1
  viewArrQuiz: any = []
  isQuizStarted = false
  selectedValue: any
  userName = ''
  submitted = false

  constructor(
    private adminService: AdminService,
    private quizService: QuizService,
    private reminderService: ReminderService,
    private resultService: ResultService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {



  }
  ngOnInit(): void {

    this.answerForm = new FormGroup({
      option1: new FormControl(false),
      option2: new FormControl(false),
      option3: new FormControl(false),
      option4: new FormControl(false)
    });

    this.adminService.getAllQuestions().subscribe((data) => {
      this.arrQuestions = data
      console.log(this.arrQuestions);


    })

    this.activatedRoute.params.subscribe(params => {
      this.userName = params['variable'];
      console.log(this.userName);
    });

    this.quizService.getQuezlist().subscribe((data) => {
      //  console.log("data => "+data);
      this.viewArrQuiz = data
      console.log(this.viewArrQuiz);
      for (let i = 0; i < this.viewArrQuiz.length; i++) {

        console.log(this.viewArrQuiz[i]);

        // this.arrQuiz[i].quizType = this.viewArrQuiz[i].
      }
    })
    // console.log("this.viewArrQuiz => " + this.viewArrQuiz);


  }
  lengthArr = 0
  startQuiz() {
    this.isQuizStarted = true
    this.flagStartQuiz = true
    this.totalPoints = this.arrQuestions.length * 10

    this.adminService.getAllQuestions().subscribe((data) => {
      this.arrQuestions = data
      this.lengthArr = this.arrQuestions.length
      console.log(this.arrQuestions);

      for (let i = 0; i < this.arrQuestions.length; i++) {


      }

    })
  }
  submitAnswer(questionNumber: any, answer: any) {
    this.submitted = !this.submitted
    // console.log("this.arrQuestions[questionNumber] => "
    //   + this.arrQuestions[questionNumber].questionText);
    // console.log("answer => " + answer);

    console.log("length => " + length);

    let answerobj = {
      question: this.arrQuestions[questionNumber].id,
      answer: answer
    }
    // console.log(answerobj);

    this.arrfinalAnswer.push(answerobj)
    if (this.arrQuestions.length - 1 > this.activeQuestion) {
      this.activeQuestion += 1
      // console.log(this.activeQuestion + " = > activeQuestion");

    } else {
      // console.log("this.isFinished = false");

      this.isFinished = true
    }
    // console.log(this.arrfinalAnswer + " => this.arrfinalAnswer");



  }
  isDone = false
  finalAnswer() {

    let checkResult: any = { user: this.userName, data: this.arrfinalAnswer }
    this.resultService.finalAnswer(checkResult).subscribe((data) => {
      console.log(data);

    })
    
    this.isDone=true
    // this.router.navigate(['user/user']);

  }

  viewAllQuizzes() {
    this.quizService.getQuezlist().subscribe((data) => {
      //  console.log("data => "+data);
      this.viewArrQuiz = data
      console.log(this.viewArrQuiz);
      for (let i = 0; i < this.viewArrQuiz.length; i++) {

        console.log(this.viewArrQuiz[i]);

        // this.arrQuiz[i].quizType = this.viewArrQuiz[i].
      }
    })
    console.log(this.viewArrQuiz);



  }
  selectAnswer() {
    // console.log("radio selected");

    this.submitted = true
    this.selectedValue = this.selectedValue
  }
  nextQuestion() {
    // console.log(length + " => length");

    if (this.activeQuestion < length - 1) {
      this.activeQuestion++
    } else {

    }
  }

  prevQuestion() {

    if (this.activeQuestion > 0) {
      this.activeQuestion--
    } else {

    }
    
  }
  paginate(event:any){
    this.activeQuestion = event.page
    console.log("event.page => "+event.page);
    console.log("this.activeQuestion => "+this.activeQuestion);
    
  }
}
