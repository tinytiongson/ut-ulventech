import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from '../components/main/app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentModule } from './component.module';
import { FacadeModule } from './facade.module';
import { ServiceModule } from './service.module';

@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ComponentModule,
    FacadeModule,
    HttpClientModule,
    ServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
