import { AbstractControl, ValidationErrors } from "@angular/forms";

import validator from 'validator';

export function UrlValidator(control: AbstractControl) : ValidationErrors | null {
  return control.value && !validator.isURL(control.value) ? { 'isValidUrl': false } : null;
}
