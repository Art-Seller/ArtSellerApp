import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { UploadcareService } from '../../core/services/uploadcare.service';
import * as LR from '@uploadcare/blocks';

LR.registerBlocks(LR);
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GalleryComponent implements OnInit {
  constructor(private uploadcareService: UploadcareService) {}

  @ViewChild('ctxProvider', { static: true }) ctxProvider!: ElementRef<
    typeof LR.UploadCtxProvider.prototype
  >;
  
  uploadedFiles: LR.OutputFileEntry[] = [];
  files: any[] = [];

  ngOnInit(): void {
    this.getFiles();

    this.ctxProvider.nativeElement.addEventListener(
      'data-output',
      this.handleUploadEvent,
    );
    this.ctxProvider.nativeElement.addEventListener(
      'done-flow',
      this.handleDoneFlow,
    );
  }

  async getFiles() {
    try {
      const response = await this.uploadcareService.getListOfFiles();
      this.files = response.results; // Extract the files array from the 'results' property
      console.log('List of files:', this.files);
    } catch (error) {
      console.error('Error fetching list of files:', error);
      // Handle the error
    }
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
