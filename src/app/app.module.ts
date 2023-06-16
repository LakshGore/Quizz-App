import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccordionModule } from 'primeng-lts/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng-lts/table';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng-lts/tabview';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { TabMenuModule } from 'primeng/tabmenu';
import { ListboxModule } from 'primeng/listbox';
import { HeaderComponent } from './header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AdminModule } from './admin/admin.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrderListModule } from 'primeng/orderlist';
import { QuestionTableComponent } from './question-table/question-table.component';
import { Quiz1Component } from './quiz/quiz1/quiz1.component';
import { PaginatorModule } from 'primeng/paginator';
import { CheckboxModule } from 'primeng/checkbox';
import { DemoComponent } from './demoForAns/demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    QuestionTableComponent,
    Quiz1Component,
    DemoComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
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
    ReactiveFormsModule,
    DropdownModule,
    SplitterModule,
    DividerModule,
    InputTextModule,
    RadioButtonModule,
    HttpClientModule,
    OrderListModule,
    PaginatorModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
