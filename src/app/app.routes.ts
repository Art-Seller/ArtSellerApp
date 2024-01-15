import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
    {path:'services',component:ServicesComponent},
    {path:'gallery',component:GalleryComponent},
    { path: 'pricing', component: PricingComponent },
    { path: 'about-us', component: AboutComponent },
];
