import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CharCountPipe } from "../pipes/char-count.pipe";

@NgModule({
	imports: [CommonModule],
	declarations: [
		CharCountPipe
	],
	exports: [
    CharCountPipe
	]
})
export class SharedPipesModule {}
