import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild, ElementRef } from '@angular/core';
import * as LR from '@uploadcare/blocks';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

LR.registerBlocks(LR)
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './gallery.component.html',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class GalleryComponent {

  @ViewChild('ctxProvider', { static: true }) ctxProvider!: ElementRef<
  typeof LR.UploadCtxProvider.prototype
>;
uploadedFiles: LR.OutputFileEntry[] = [];

ngOnInit(): void {
  this.ctxProvider.nativeElement.addEventListener(
    'data-output',
    this.handleUploadEvent
  );
  this.ctxProvider.nativeElement.addEventListener(
    'done-flow',
    this.handleDoneFlow
  );
}

handleUploadEvent = (e: Event) => {
  if (!(e instanceof CustomEvent)) {
    return;
  }

  if (e.detail) {
    this.uploadedFiles = e.detail as LR.OutputFileEntry[];
  }
};

handleDoneFlow = () => {
  console.log('handleDoneFlow');
};


}
