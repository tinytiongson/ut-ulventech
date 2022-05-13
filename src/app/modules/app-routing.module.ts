import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormComponent } from './../components/reactive-form/reactive-form.component';
import { WordsReportComponent } from './../components/words-report/words-report.component';

const routes: Routes = [
  { path: 'home', component: ReactiveFormComponent},
  { path: 'report', component: WordsReportComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
