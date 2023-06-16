import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { QuizService } from 'src/app/services/quiz.service';
import { ViewChild } from '@angular/core';


interface QuizTypes {

  name: string
}

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  viewArrQuiz: any;

  constructor(
    private adminService: AdminService,
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {
    this.quizTypes = [
      { name: 'mcq' },
      { name: 'general' },
      { name: 'boolean' },
    ]
  }

  idAllQue = false
  isDisabledAddToQuiz = true
  quizTypes!: QuizTypes[];
  arrAllQuestions: any = []
  arrMcqQuestions: any = []
  arrBooleanQuestions: any = []

  isChecked = false
  arrSelectedQuestions: any[] = []
  newQuiz: any[] = []
  flagToView = false
  selectedQuizType: any
  selectedQuiz: any
  questionSet: any
  sortedArray: any = []
  isWrittenType = false
  isBooleanType = false
  isMcqType = false


  ngOnInit(): void {

    this.selectedQuizType = this.route.snapshot.queryParamMap.get('param')
    console.log("this.selectedQuizType => " + this.selectedQuizType);


  }

  allQuestions() {
    this.idAllQue = true
    this.flagToView = false
    this.isBooleanType = true
    this.isMcqType = true
    this.isWrittenType = true

    // console.log("this.selectedQuiz => " + this.selectedQuiz);

    this.adminService.getAllQuestions().subscribe((data) => {
      // console.log(data);
      this.arrAllQuestions = data
      for (let i = 0; i < this.arrAllQuestions.length; i++) {
        if (this.arrAllQuestions[i].questionType == "MCQ") {
          this.arrMcqQuestions.push(this.arrAllQuestions[i])
        } else
          if (this.arrAllQuestions[i].questionType == "Boolean") {
            this.arrBooleanQuestions.push(this.arrAllQuestions[i])
          }

        console.log(this.arrAllQuestions[i]);
      }


      //  **********  Using Object.keys *******************

      // for (let i = 0; i < this.arrAllQuestions.length; i++) {
      //   Object.keys(this.arrAllQuestions[i]).forEach(key => {
      //     const value = this.arrAllQuestions[i][key];
      //     if (value !== '' && value !== null && value !== undefined) {
      //       this.sortedArray[i][key] = value;
      //     }
      //   });
      // }
    })
    if (this.selectedQuiz == 'mcq') {


      this.adminService.getAllQuestions().subscribe((data) => {
        console.log(data);
        this.arrAllQuestions = data
        console.log(this.arrAllQuestions);


      })

    }
  }
  viewAllQuizzes() {
    this.quizService.getQuezlist().subscribe((data) => {
      console.log(data);
      this.viewArrQuiz = data

    })

  }

  selectedQuestions(question: any, isChecked:boolean) {

    console.log(question);
    let obj = {
      questionId: question.id,
      quizType : question.selectedQuiz,
      questionType: question.questionType
    }

      console.log(this.arrSelectedQuestions);
    if (!this.arrSelectedQuestions.some(item => item.questionId === obj.questionId)) {
      // add the object to the array
      this.arrSelectedQuestions.push(obj);
    }

    // if (this.arrSelectedQuestions.includes(question)) {
    //   console.log(this.arrSelectedQuestions);
    //   this.arrSelectedQuestions = this.arrSelectedQuestions.filter(i => i !== question);


    // } else {

    //   this.arrSelectedQuestions.push(question)
    //   console.log(false);
    //   console.log(this.arrSelectedQuestions);

    // }
    if (this.arrSelectedQuestions.length > 0) {
      this.isDisabledAddToQuiz = false
    } else {
      this.isDisabledAddToQuiz = true
    }
  }


  addToQuiz() {

    this.flagToView = true
    // this.newQuiz = this.arrSelectedQuestions;
    // console.log(this.arrSelectedQuestions.length + " : this.arrAllQuestions.length");
    // const len = this.arrSelectedQuestions.length
    // console.log(len - 1 + " : len-1");

    //  ********** 1 by 1 push *************

    // for (let i = 0; i < len; i++) {

    //   console.log("this.newQuiz.includes(this.arrSelectedQuestions[i]) => " + this.newQuiz.includes(this.arrSelectedQuestions[i]));


    //   // console.log("view Quiz" + this.newQuiz[i]);
    //   if (this.newQuiz.includes(this.arrSelectedQuestions[i])) {
    //     console.log(this.arrSelectedQuestions);
    //     this.newQuiz = this.newQuiz.filter(item => item !== this.arrSelectedQuestions[i]);
    //   } else {

    //     this.newQuiz.push(this.arrSelectedQuestions[i])
    //     console.log(false);
    //     console.log(this.arrSelectedQuestions[i] + " => arrSelectedQuestions : index =>" + i);
    //     console.log(this.newQuiz + " => newQuiz");

    //   }

    // }
    // for (let i = 0; i < this.arrAllQuestions.length - 1; i++) {
    //   console.log("view arrSelectedQuestions" + this.arrSelectedQuestions[i]);
    // }
    //   ****************************************************

    //  ***************** copy whole array 1. *************


    // this.newQuiz = this.arrSelectedQuestions.filter((element,index,self)=>{
    //   return index === self.indexOf(element)

    // })
    // Not working above blcok properly


    //  ***************** copy whole array 2. *************
    // this.newQuiz = [...new Set(this.arrSelectedQuestions)]

    // this.newQuiz = Array.from(new Set(this.arrSelectedQuestions));

    // this.arrSelectedQuestions.forEach((value) => {
    //   if (!this.newQuiz.includes(value)) {
    //     this.newQuiz.push(value)
    //   }
    // })

    // this.arrAllQuestions.forEach(obj:any  => {
    //   if(!this.newQuiz.some(item => JSON.stringify(item) === JSON.stringify(obj))){
    //     this.newQuiz.push(obj)
    //   }
    // })

    //  ***************** solved ****************
    for (const obj of this.arrSelectedQuestions) {
      if (!this.newQuiz.some(item => JSON.stringify(item) === JSON.stringify(obj))) {
        this.newQuiz.push(obj)
      }
      console.log(this.newQuiz);

    }
    // let tempArr:any 
    //     tempArr = this.arrSelectedQuestions.map(obj =>
    //   Object.fromEntries(
    //     Object.entries(obj).filter(([key,value] => value !== ''))
    //   ))

  }



  // onCheckboxChange(item) {
  //   if (this.selectedItems.includes(item)) {
  //     this.selectedItems = this.selectedItems.filter(i => i !== item);
  //   } else {
  //     this.selectedItems.push(item);
  //   }
  // }
  viewQuiz() {
    this.flagToView = true

  }
  addQuizToDB() {

    const id = Math.random().toString(36).substring(2, 10);

    const temp = { quizId: id, quizData: this.newQuiz }
    console.log(temp + " : temp");

    this.quizService.saveQuiz(this.newQuiz).subscribe((data) => {
      console.log(data);

    })

    this.flagToView = false
    this.ngOnInit()
  }

  showQuizList() {

    this.quizService.getQuezlist().subscribe((data) => {
      console.log(data);

    })
  }

  test() {
    const sourceObj: any = { a: 1, b: '', c: null, d: 4, e: '', f: undefined };
    const destObj: any = { ...sourceObj };

    Object.entries(destObj)
      .filter(([key, value]) => value === '' || value === null || value === undefined)
      .forEach(([key, value]) => delete destObj[key]);

    console.log(sourceObj);
    console.log(destObj);

  }
  goBack() {
    this.flagToView = !this.flagToView

  }
}
