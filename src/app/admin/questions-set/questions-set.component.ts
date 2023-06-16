import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

interface QuizTypes {
  
  name: string
}

@Component({
  selector: 'app-questions-set',
  templateUrl: './questions-set.component.html',
  styleUrls: ['./questions-set.component.css']
})
export class QuestionsSetComponent implements OnInit {

  quizTypes!: QuizTypes[];
  dropQuestion!: QuizTypes[];
  questionForm!: FormGroup
  selectedQuiz: any
  selectedQuestionType !: string
  arrQuizType: any[] = []
  flagToView!: boolean;
  arrAllQuestions: any = [];

  constructor(private adminService: AdminService) {

  }

  ngOnInit() {

    this.quizTypes = [
      { name: 'Maths' },
      {  name: 'Java' },
      {  name: 'Angular' },

    ];
    this.dropQuestion = [
      { name: 'MCQ' },
      {  name: 'Boolean' },
      { name: 'Multi-Answer' },

    ];

    this.questionForm = new FormGroup({
      selectedQuiz: new FormControl('', [Validators.required]),
      questionType: new FormControl('', [Validators.required]),
      questionText: new FormControl('', [Validators.required]),
      option1Text: new FormControl(''),
      option2Text: new FormControl(''),
      option3Text: new FormControl(''),
      option4Text: new FormControl(''),
      answerText: new FormControl(''),
      booleanAns: new FormControl(''),
      multiOption1: new FormControl(''),
      multiOption2: new FormControl(''),
      multiOption3: new FormControl(''),
      multiOption4: new FormControl(''),
      multiAnswerText: new FormControl(''),
      answerRadio: new FormControl('')
    })

  }

  selectQuiz(menu: any) {
    this.selectedQuiz = menu

    console.log(this.selectedQuiz + " : selectedQuiz");

  }
  selectQueType(questionType: any) {
    this.selectedQuestionType = questionType
    console.log(this.selectedQuestionType + " : selectedQuestionType");
  }


  flagMcq = false
  flagBoolean = false
  flagmulti = false

  checkQuestionType() {
    console.log(this.questionForm.get('questionType')?.value);
    if (this.questionForm.get('questionType')?.value == 'MCQ') {
      this.flagMcq = true
      this.flagBoolean = false
      this.flagmulti = false
      console.log("mcq true");

    }
    else
      if (this.questionForm.get('questionType')?.value == 'Boolean') {
        this.flagMcq = false
        this.flagBoolean = true
        this.flagmulti = false
        console.log("boolean true");

      }
      else
        if (this.questionForm.get('questionType')?.value == 'Multi-Answer') {
          this.flagMcq = false
          this.flagBoolean = false
          this.flagmulti = true
          console.log("multi true");
        }
  }
  onSubmit() {
    this.arrQuizType = this.questionForm.value
    // console.log(this.arrQuizType);
    console.log(this.questionForm.value);


    this.adminService.addQuestion(this.questionForm.value).subscribe((data)=>{
      console.log("question added successfully");
      
    })

    this.ngOnInit()
  }
  viewForm(){
    this.flagToView = false
  }
  allQuestions() {
    this.flagToView = true
    let tempArr :any []=[]

    // console.log("this.selectedQuiz => " + this.selectedQuiz);

    this.adminService.getAllQuestions().subscribe((data) => {
      // console.log(data);
      this.arrAllQuestions = data

      console.log("this.arrAllQuestions => "+this.arrAllQuestions);
      
     
      // test() {
      //   const sourceObj:any = { a: 1, b: '', c: null, d: 4 ,e:'',f:undefined};
      //   const destObj:any = { ...sourceObj };
    
      //   Object.entries(destObj)
      //     .filter(([key, value]) => value === '' || value === null || value === undefined)
      //     .forEach(([key, value]) => delete destObj[key]);
    
      //   console.log(sourceObj);
      //   console.log(destObj);
    
      // // }
      
    })
    for(let i=0; i<this.arrAllQuestions.length;i++){
      console.log("this.arrAllQuestions[i] => "+this.arrAllQuestions[i].value);
      
      tempArr[i] = { ...this.arrAllQuestions[i]}
      Object.entries(tempArr[i])
        .filter(([key, value]) => value === '' || value === null || value === undefined)
        .forEach(([key, value]) => delete tempArr[i][key]); 
        console.log("tempArr[i] => "+tempArr[i]);
        
    }
    
    
  }
  
}
