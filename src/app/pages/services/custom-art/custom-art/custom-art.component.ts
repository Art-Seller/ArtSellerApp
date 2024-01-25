import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { CartService } from '../../../../core/services/cart.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as LR from '@uploadcare/blocks';
LR.registerBlocks(LR);

@Component({
  selector: 'app-custom-art',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,   
    RouterLink,
  ],
  templateUrl: './custom-art.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomArtComponent implements OnInit {

  

  constructor(private fb: FormBuilder,private cartService: CartService) {
    // Initialize the form with empty form controls
    this.form = this.fb.group({
      imageUrl :{},
      numberOfPeople: ['0'],
      canvasSize: ['8x10 in'],
      // Add more form controls as needed for other steps
    });
  }

  submitForm(): void {
    // Access form data from 'this.formData' and send it to the cart service
    // Example: cartService.addToCart(this.formData);
    this.cartService.addToCart(this.formData); 
    console.log('Form Data:', this.formData);
  }


  form: FormGroup;
  formData = {
    imageUrl:{},
    numberOfPeople: '0',
    canvasSize: '8x10 in', // Set this to the default canvas size
  };

  @ViewChild('ctxProvider', { static: true }) ctxProvider!: ElementRef<
    typeof LR.UploadCtxProvider.prototype
  >;

  uploadedFiles: LR.OutputFileEntry[] = [];

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

    if (!(e instanceof CustomEvent)) {
      return;
    }

    if (e.detail) {
      this.uploadedFiles = e.detail as LR.OutputFileEntry[];
    }

  };



  handleDoneFlow = () => {
    this.formData.imageUrl=this.uploadedFiles
  };
}
