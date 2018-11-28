import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchArtistPipe } from './search-artist.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import * as $ from 'jquery';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';
import { GenerateQuestionViewComponent } from './generatequestion-view/generatequestion-view.component';
import { DecisioncodeViewComponent } from './decisioncode-view/decisioncode-view.component';
import { MakeadecisionViewComponent } from './makeadecision-view/makeadecision-view.component';
import { DecideViewComponent } from './decide-view/decide-view.component';
import { VoteViewComponent } from './vote-view/vote-view.component';
import { CommentViewComponent } from './comment-view/comment-view.component';

// ng bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    SearchArtistPipe,
    NavbarComponent,
    HomeViewComponent,
    GenerateQuestionViewComponent,
    DecisioncodeViewComponent,
    MakeadecisionViewComponent,
    DecideViewComponent,
    VoteViewComponent,
    CommentViewComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
