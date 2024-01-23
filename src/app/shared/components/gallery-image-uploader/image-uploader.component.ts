import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import * as LR from "@uploadcare/blocks";
import { UploadcareService } from '../../../core/services/uploadcare.service';
LR.registerBlocks(LR);
            

@Component({
  selector: 'image-uploader',
  standalone: true,
  imports: [],
  templateUrl: './image-uploader.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ImageUploaderComponent {
  @ViewChild('ctxProvider', { static: true }) ctxProvider!: ElementRef<
    typeof LR.UploadCtxProvider.prototype
  >;

  ngOnInit(): void {

    this.ctxProvider.nativeElement.addEventListener(
      'data-output',
      this.handleUploadEvent,
    );
    this.ctxProvider.nativeElement.addEventListener(
      'done-flow',
      this.handleDoneFlow,
    );
  }

  handleUploadEvent = (e: Event) => {
    // Show the Image after Upload Logic

    // if (!(e instanceof CustomEvent)) {
    //   return;
    // }

    // if (e.detail) {
    //   this.uploadedFiles = e.detail as LR.OutputFileEntry[];
    // }

  };

  handleDoneFlow = () => {
    console.log('handleDoneFlow');
  };
  
}
