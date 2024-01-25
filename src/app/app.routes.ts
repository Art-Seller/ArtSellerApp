import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ServicesComponent } from './pages/services/services.component';
import { LandingComponent } from './shared/components/landing/landing.component';
import { CustomArtComponent } from './pages/services/custom-art/custom-art/custom-art.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    {path:'',component:LandingComponent},
    {path:'services',component:ServicesComponent},
    {path:'services/custom-art',component:CustomArtComponent},
    {path:'cart',component:CartComponent},
    {path:'gallery',component:GalleryComponent},
    { path: 'pricing', component: PricingComponent },
    { path: 'about-us', component: AboutComponent },
    
];
