import { NgModule } from "@angular/core";

import { WordsFacade } from '../facade/words.facade';

@NgModule({
  providers: [WordsFacade]
})
export class FacadeModule {}
