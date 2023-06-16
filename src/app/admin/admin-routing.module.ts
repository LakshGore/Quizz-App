import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { ModerateComponent } from './moderate/moderate.component';
import { QuestionsSetComponent } from './questions-set/questions-set.component';
import { SavedQuizzesComponent } from './saved-quizzes/saved-quizzes.component';
import { ViewQuestionsComponent } from './view-questions/view-questions.component';


const routes: Routes = [
  
  
  { path:"createQuiz", component:CreateQuizComponent},
  { path:"questionSet", component:QuestionsSetComponent},
  { path:"admin", component:AdminComponent},
  { path:"viewQuestions", component:ViewQuestionsComponent},
  { path:"savedQuiz", component:SavedQuizzesComponent},
  { path:"moderate", component:ModerateComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
