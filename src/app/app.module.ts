import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactfromComponent } from './reactfrom/reactfrom.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UserFilterPipe } from './users/user-filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { DemoDirectiveDirective } from './demo-directive.directive';
import { ChildComponent } from './child/child.component';
import { MaterialpracticeComponent } from './materialpractice/materialpractice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    ReactfromComponent,
    UsersComponent,
    UserComponent,
    UserFilterPipe,
    DemoDirectiveDirective,
    ChildComponent,
    MaterialpracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
