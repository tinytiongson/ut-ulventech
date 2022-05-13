import { Component, Inject } from '@angular/core';

import { WordsFacade } from '../../facade/words.facade';

@Component({
  selector: 'words-report-component',
  templateUrl: './words-report.component.html'
})
export class WordsReportComponent {

  constructor(@Inject(WordsFacade) public wordsFacade: WordsFacade) {

  }
}
