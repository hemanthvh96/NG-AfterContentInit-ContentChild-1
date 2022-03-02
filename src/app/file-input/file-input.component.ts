import {
  Component,
  ElementRef,
  ContentChild,
  AfterContentInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css'],
})
export class FileInputComponent implements AfterContentInit {
  file: File;
  imgSrc: string;

  @ContentChild('file') fileInputEl: ElementRef<HTMLInputElement>;

  constructor(public renderer: Renderer2) {}

  ngAfterContentInit() {
    const { nativeElement } = this.fileInputEl;
    this.renderer.addClass(nativeElement, 'hideIp'); // hideIp class to hide the input element is added in App Component

    nativeElement.addEventListener('change', (event) => {
      this.previewImage(event.target as HTMLInputElement); // event.target is of HTMLInputElement
    });
  }

  previewImage(ipEl: HTMLInputElement) {
    const file = ipEl.files?.item(0);
    if (!file) return;
    this.file = file as File;
    const reader = new FileReader();
    reader.readAsDataURL(file as Blob);
    reader.addEventListener('load', (event) => {
      this.imgSrc = event.target?.result as string;
    });
  }

  openDialog() {
    this.fileInputEl.nativeElement.click();
  }
}
