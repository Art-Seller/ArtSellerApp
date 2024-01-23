import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { LandingComponent } from './shared/components/landing/landing.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,LandingComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Artseller-app';

}
