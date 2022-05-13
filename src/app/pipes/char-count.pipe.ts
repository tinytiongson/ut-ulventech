import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'charCount' })
export class CharCountPipe implements PipeTransform {
  constructor() {}

  transform(value: string) {
    if (!value) return "";
    let str = value.replace(/  +/g, ' ').trim();
    return str.length + ` characters`;
  }
}
