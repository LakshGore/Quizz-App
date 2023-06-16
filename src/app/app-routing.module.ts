import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin/admin.component';
import { QuestionTableComponent } from './question-table/question-table.component';
import { Quiz1Component } from './quiz/quiz1/quiz1.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';



 
const routes: Routes = [
  { path:"quiz/:variable", component:Quiz1Component},
  { path:"home", component:HomeComponent},
  { path:"",pathMatch:"full" ,component:HomeComponent},
  { path:"login", component:LoginComponent},
  
  { path:"excelQuestion", component:QuestionTableComponent},
  
  { path:'user', loadChildren: () => UserModule},
  { path:'admin', loadChildren: () => AdminModule},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  QuizComponent, AdminComponent,
]
