import { Component, Input } from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {CdkStepper, CdkStepperModule} from '@angular/cdk/stepper';


@Component({
  selector: 'app-custom-stepper',
  standalone: true,
  imports: [NgTemplateOutlet, CdkStepperModule],
  templateUrl: './custom-stepper.component.html',
  providers: [{provide: CdkStepper, useExisting: CustomStepperComponent}],
})
export class CustomStepperComponent extends CdkStepper {
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
