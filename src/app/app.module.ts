import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageService } from 'primeng/api';
import { PrimeNgModule } from './components/prime-ng/prime-ng.module';
import { ButtonCounterComponent } from './components/button-counter/button-counter.component';
import { LabelComponent } from './components/label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonCounterComponent,
    LabelComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    PrimeNgModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
