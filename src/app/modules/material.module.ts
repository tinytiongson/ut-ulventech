import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar"

@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [MatIconRegistry, { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }]
})
export class MaterialModule {
  constructor(public matIconRegistry: MatIconRegistry) {

  }
}
