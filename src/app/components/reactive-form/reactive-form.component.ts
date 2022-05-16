import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UrlValidator } from 'src/app/validators/url-validator.validators';
import { WordsFacade } from '../../facade/words.facade';

@Component({
  selector: 'reactive-form-component',
  templateUrl: './reactive-form.component.html',
})
export class ReactiveFormComponent {
  reactiveForm = new FormGroup({
    inputWordsArea: new FormControl('', [Validators.required]),
    urlWords: new FormControl('', [UrlValidator]),
  });

  constructor(@Inject(WordsFacade) public wordsFacade: WordsFacade) {}

  public onSubmit(): void {
    this.reactiveForm.updateValueAndValidity();
    if (this.reactiveForm.valid) {
      this.wordsFacade.processData({
        story: this.reactiveForm.value?.inputWordsArea,
        url: this.reactiveForm.value?.urlWords,
      });
    }
  }
}
