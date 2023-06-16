import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { QuestionsSetComponent } from './questions-set/questions-set.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng-lts/card';

import {TableModule} from 'primeng-lts/table';
import {TabViewModule} from 'primeng-lts/tabview';
import {PanelModule} from 'primeng/panel';
import {FieldsetModule} from 'primeng/fieldset';
import {TabMenuModule} from 'primeng/tabmenu';
import {ListboxModule} from 'primeng/listbox';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {SplitterModule} from 'primeng/splitter';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {OrderListModule} from 'primeng/orderlist';
import { ViewQuestionsComponent } from './view-questions/view-questions.component';
import { SavedQuizzesComponent } from './saved-quizzes/saved-quizzes.component';
import { ModerateComponent } from './moderate/moderate.component';



@NgModule({
  declarations: [
    
    QuestionsSetComponent,
    CreateQuizComponent,
    ViewQuestionsComponent,
    SavedQuizzesComponent,
    ModerateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    DropdownModule,
    CardModule,
    TableModule,
    TabViewModule,
    PanelModule,
    FieldsetModule,
    TabMenuModule,
    ListboxModule,
    MenubarModule,
    MenuModule,
    ButtonModule,
    FormsModule,
    SplitterModule,
    DividerModule,
    InputTextModule,
    RadioButtonModule,
    CheckboxModule,
    OrderListModule,
    
    
  ]
})
export class AdminModule { }
