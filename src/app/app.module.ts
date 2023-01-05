import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { SliderModule } from 'primeng/slider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AutoCompleteModule,
    SliderModule,
  ],
  exports: [AutoCompleteModule, SliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
