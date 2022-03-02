import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}

/* 
  The Motive is to : Create a Image Previewer

  1. Project the Input Element to the FileInput Component
  2. Use ContentChild to query the projected content in FileInputComponent
  3. Access that query variable in AfterContentInit() Life Cycle Hook. Also Hide that Input Element.
  4. Click on the Select Image & a dialog opens to select the Image
  5. Read the image as readAsDataURL and get the src
*/
