import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PricingComponent } from './pages/pricing/pricing.component';

export const routes: Routes = [
    { path: '', redirectTo: '/get-started', pathMatch: 'full' },
    { path: 'pricing', component: PricingComponent },
    { path: 'about-us', component: AboutComponent },
    { path: '**', redirectTo: '/get-started' } 
];
