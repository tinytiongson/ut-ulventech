import { NgModule } from "@angular/core";

import { WordService } from './../services/word.service';

@NgModule({
  providers: [WordService]
})
export class ServiceModule {}
