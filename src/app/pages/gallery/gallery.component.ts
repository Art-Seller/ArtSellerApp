import {
  Component,
  OnInit,
} from '@angular/core';
import { UploadcareService } from '../../core/services/uploadcare.service';
import { ImageUploaderComponent } from '../../shared/components/gallery-image-uploader/image-uploader.component';
import * as LR from '@uploadcare/blocks';

LR.registerBlocks(LR);
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageUploaderComponent],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {
  constructor(private uploadcareService: UploadcareService) {}

 
  // uploadedFiles: LR.OutputFileEntry[] = [];
  files: any[] = [];

  ngOnInit(): void {
    this.getFiles();
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
  

 
}
