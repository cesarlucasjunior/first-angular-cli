import { CommentService } from './comment.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule} from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { CommentComponent } from './comment/comment.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
