import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';


import {TableModule} from 'primeng-lts/table';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng-lts/tabview';
import {PanelModule} from 'primeng/panel';
import {FieldsetModule} from 'primeng/fieldset';
import {TabMenuModule} from 'primeng/tabmenu';
import {ListboxModule} from 'primeng/listbox';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {SplitterModule} from 'primeng/splitter';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
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
    ReactiveFormsModule ,
    DropdownModule,
    SplitterModule,
    DividerModule,
    InputTextModule,
    RadioButtonModule,
    CardModule,
  ]
})
export class UserModule { }
