import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from '../home-view/home-view.component';
import { GenerateQuestionViewComponent } from '../generatequestion-view/generatequestion-view.component';
import { DecisioncodeViewComponent } from '../decisioncode-view/decisioncode-view.component';
import { MakeadecisionViewComponent } from '../makeadecision-view/makeadecision-view.component';
import { DecideViewComponent } from '../decide-view/decide-view.component';
import { VoteViewComponent } from '../vote-view/vote-view.component';
import { CommentViewComponent } from '../comment-view/comment-view.component';

const routes: Routes = [
  {
    path: 'generateq',
    component: GenerateQuestionViewComponent,
  },
  {
    path: 'decisioncode',
    component: DecisioncodeViewComponent,
  },
  {
    path: 'comment',
    component: CommentViewComponent,
  },
  {
    path: 'decide',
    component: DecideViewComponent,
  },
  {
    path: 'makeadecision',
    component: MakeadecisionViewComponent,
  },
  {
    path: 'vote',
    component: VoteViewComponent,
  },
  {
    path: '',
    component: HomeViewComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
