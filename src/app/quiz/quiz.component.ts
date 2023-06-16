import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { QuizService } from '../services/quiz.service';
import { ReminderService } from '../services/reminder.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  correctAnswer = ""
  wrongAnswer = ""
  answerSubmitted = false
  checkAnswer = "false"
  activeQuestion = 0
  // dummyarr: any[] = ['1', '2', '3', '4', '5', '6']
  dummarr: any[] = []
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

  // arrQuestions: any[] = [
  //   {
  //     question: "what is your first name",
  //     options: ["laxman", "lakshman", "laxaman", "lakshaman"],
  //     answer: "laxman"
  //   },
  //   {
  //     question: "what is your nick name",
  //     options: ["lakshya", "laxya", "lakhya", "laksh"],
  //     answer: "laksh"
  //   },
  //   {
  //     question: "what is your friends name",
  //     options: ["shubham", "subya", "shubhya", "shubhdya"],
  //     answer: "shubham"
  //   }, {
  //     question: "what is your school name",
  //     options: ["PMD", "PMDC", "MGV UK", "MGV"],
  //     answer: "MGV UK"
  //   }, {
  //     question: "Which Mobile are you using",
  //     options: ["iphone", "vivo", "oppo", "redme"],
  //     answer: "redme"
  //   }, {
  //     question: "what is your friends name",
  //     options: ["shubham", "subya", "shubhya", "shubhdya"],
  //     answer: "shubham"
  //   }, {
  //     question: "what is your friends name",
  //     options: ["shubham", "subya", "shubhya", "shubhdya"],
  //     answer: "shubham"
  //   }, {
  //     question: "what is your friends name",
  //     options: ["shubham", "subya", "shubhya", "shubhdya"],
  //     answer: "shubham"
  //   }, {
  //     question: "what is your friends name",
  //     options: ["shubham", "subya", "shubhya", "shubhdya"],
  //     answer: "shubham"
  //   }, {
  //     question: "what is your friends name",
  //     options: ["shubham", "subya", "shubhya", "shubhdya"],
  //     answer: "shubham"
  //   },
  // ]

  constructor(
    private adminService: AdminService,
    private quizService: QuizService,
    private reminderService: ReminderService) {



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


  }
  startQuiz() {
    this.isQuizStarted = true
    this.flagStartQuiz = true
    this.totalPoints = this.arrQuestions.length * 10

    this.adminService.getAllQuestions().subscribe((data) => {
      this.arrQuestions = data
      console.log(this.arrQuestions);

      for (let i = 0; i < this.arrQuestions.length; i++) {
        this.dummarr[i] = i
      }

    })
  }
  currentQuestion(num: number) {
    console.log("inside currentQuestion() => index : " + num);

    this.currentAns = this.arrQuestions[num].options
    this.currentQue = this.arrQuestions[num].question
  }
  addQuestion() {

  }
  questionNumberIncreament() {
    this.queCounter++

  }

  index: number = 0;

  openNext() {
    this.index = (this.index === 2) ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = (this.index === 0) ? 2 : this.index - 1;
  }

  selectedAnswer(queNumber: number, ans: any) {

    // ************** working but all get selected at a time *******************
    // console.log("Question number : " + queNumber + " & selected ans : " + ans);

    //  *************** For loop of answers *********************

    // for(let i=0;i<this.arrQuestions[queNumber].options.length;i++){
    //   // console.log(this.arrQuestions[queNumber].options[i]+"=> option["+i+"]")
    //   console.log("ans => "+ans)
    //   console.log("this.arrQuestions[queNumber].answer => "+this.arrQuestions[queNumber].answer)
    //    if(ans == this.arrQuestions[queNumber].answer){
    //     console.log(this.arrQuestions[queNumber].answer+" : Correct Answer")
    //     // this.answerSubmitted = true
    //     // this.correctAnswer = "correctAnswer"
    //     console.log("Option number : "+ans+" is correct");

    //     break

    // }
    // }

    // ****************** For individual answer List *********************
    this.flagAnswer = true
    this.answerSubmitted = true
    // console.log("this.arrQuestions[queNumber].answer => " + 
    // this.arrQuestions[queNumber].answerText     );
    // console.log("ans => " + ans);

    if (ans == this.arrQuestions[queNumber].answerText) {
      console.log("answer is correct"); 
      this.isCorrect = true
      this.points += 10
    }
    else {
      console.log("wrong answer");
      this.isCorrect = false
    }

    if (queNumber + 1 == this.arrQuestions.length) {
      this.isFinished = true
    } else {
      // console.log("this.arrQuestions.length => "+this.arrQuestions.length);

    }


  }

  // formSelectAnswer(){
  //   console.log(this.answerForm.value.option);

  // }

  viewAllQuizzes() {
    this.quizService.getQuezlist().subscribe((data) => {
      //  console.log("data => "+data);
      this.viewArrQuiz = data
      console.log("this.viewArrQuiz => " + this.viewArrQuiz);
      for (let i = 0; i < this.viewArrQuiz.length; i++) {

        console.log("this.viewArrQuiz[i] => " + this.viewArrQuiz[i]);

        // this.arrQuiz[i].quizType = this.viewArrQuiz[i].
      }
    })
    console.log("this.viewArrQuiz => " + this.viewArrQuiz);



  }
}
