import { Component, Inject, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Subject } from 'rxjs/internal/Subject';

import { UrlValidator } from 'src/app/validators/url-validator.validators';
import { WordsFacade } from '../../facade/words.facade';

@Component({
  selector: 'reactive-form-component',
  templateUrl: './reactive-form.component.html',
})
export class ReactiveFormComponent implements OnDestroy {
  protected reactiveFormUnsubscribe: Subject<void> = new Subject<void>();

  reactiveForm = new FormGroup({
    inputWordsArea: new FormControl('', [Validators.required]),
    urlWords: new FormControl('', [UrlValidator]),
  });

  constructor(@Inject(WordsFacade) public wordsFacade: WordsFacade) {}

  ngOnDestroy(): void {
    this.reactiveFormUnsubscribe.complete();
  }

  public onSubmit(): void {
    this.reactiveForm.updateValueAndValidity();
    if (this.reactiveForm.valid) {
      this.wordsFacade.processData({
        Story: this.reactiveForm.value?.inputWordsArea,
        Url: this.reactiveForm.value?.urlWords,
      });
    }
  }
}
