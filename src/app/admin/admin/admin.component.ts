import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuizService } from 'src/app/services/quiz.service';
import { Router } from '@angular/router';
import { ResultService } from 'src/app/services/result.service';

interface QuizTypes {
  code: string,
  name: string
}
interface CreateQuizTypes {
  name: string,
  code: string
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  quizTypes!: QuizTypes[];
  createQuizTypes!: CreateQuizTypes[];
  dropQuestion!: QuizTypes[];
  questionForm!: FormGroup
  selectedQuiz: any
  selectedQuestionType !: string
  arrQuizType: any[] = []
  sortedQuizData: any = []
  viewArrQuiz: any = []
  flagNavi = false
  resultArr: any = []
  isReuslt = true
  queData: any = []
  constructor(private quizService: QuizService, private router: Router,
    private resultService: ResultService) {

  }

  ngOnInit() {

    this.quizTypes = [
      { code: 'maths', name: 'Maths Quiz' },
      { code: 'general', name: 'General Quiz' },
      { code: 'animal', name: 'Animal Quiz' },

    ];
    this.dropQuestion = [
      { code: 'mcq', name: 'MCQ' },
      { code: 'boolean', name: 'Boolean' },
      { code: 'multi', name: 'Multi-Answer' },

    ];

    // this.questionForm = new FormGroup({
    //   selectedQuiz: new FormControl('', [Validators.required]),
    //   questionType: new FormControl('', [Validators.required]),
    //   questionText: new FormControl('', [Validators.required]),
    //   option1Text: new FormControl('', [Validators.required]),
    //   option2Text: new FormControl('', [Validators.required]),
    //   option3Text: new FormControl('', [Validators.required]),
    //   option4Text: new FormControl('', [Validators.required]),
    //   answerText: new FormControl('', [Validators.required]),
    //   booleanAns: new FormControl(''),
    //   multiOption1: new FormControl(''),
    //   multiOption2: new FormControl(''),
    //   multiOption3: new FormControl(''),
    //   multiOption4: new FormControl(''),
    //   multiAnswerText: new FormControl(''),
    //   answerRadio: new FormControl('')
    // })

  }

  selectQuiz(menu: any) {
    this.selectedQuiz = menu

    console.log(this.selectedQuiz + " : selectedQuiz");
    this.flagNavi = true
  }
  selectQueType(questionType: any) {
    this.selectedQuestionType = questionType
    console.log(this.selectedQuestionType + " : selectedQuestionType");
  }


  flagMcq = false
  flagBoolean = false
  flagmulti = false

  checkQuestionType() {
    console.log(this.questionForm.get('questionType')?.value.code);
    if (this.questionForm.get('questionType')?.value.code == 'mcq') {
      this.flagMcq = true
      this.flagBoolean = false
      this.flagmulti = false
      console.log("mcq true");

    }
    else
      if (this.questionForm.get('questionType')?.value.code == 'boolean') {
        this.flagMcq = false
        this.flagBoolean = true
        this.flagmulti = false
        console.log("boolean true");

      }
      else
        if (this.questionForm.get('questionType')?.value.code == 'multi') {
          this.flagMcq = false
          this.flagBoolean = false
          this.flagmulti = true
          console.log("multi true");
        }
  }
  onSubmit() {
    this.arrQuizType = this.questionForm.value
    console.log(this.arrQuizType);
    this.ngOnInit()
  }

  viewAllQuizzes() {
    this.quizService.getQuezlist().subscribe((data) => {
      console.log(data);
      this.viewArrQuiz = data


    })
  }
  // goToCreateQuiz(event: any) {

  //   this.selectedQuiz = event.value
  //   console.log(this.selectedQuiz);

  //   console.log(this.flagNavi);
  //   let route = '/createQuiz'
  //   let data = this.selectedQuiz
  //   this.router.navigate(['/createQuiz'], { queryParams: {param:data}})

  // }
}

