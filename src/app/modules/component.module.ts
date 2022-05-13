import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { AppComponent } from './../components/main/app.component';
import { HeaderComponent } from './../components/header/header.component';
import { ReactiveFormComponent } from './../components/reactive-form/reactive-form.component';
import { SharedPipesModule } from './shared-pipes.module';
import { WordsReportComponent } from '../components/words-report/words-report.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, ReactiveFormComponent, WordsReportComponent],
  entryComponents: [ReactiveFormComponent, WordsReportComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedPipesModule
  ]
})
export class ComponentModule {}
