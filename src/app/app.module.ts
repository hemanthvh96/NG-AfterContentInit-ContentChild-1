import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FileInputComponent } from './file-input/file-input.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FileInputComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
