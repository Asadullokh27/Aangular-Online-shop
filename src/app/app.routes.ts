import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InformationComponent } from './pages/information/information.component';
import { StoreComponent } from './pages/store/store.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {path : "" , title : "Home Page", component : HomeComponent},
    {path : "home" , title : "Home Page", component : HomeComponent},
    {path : "about" , title : "About Page", component : AboutComponent},
    {path : "contact" , title : "Contact Page", component : ContactComponent},
    {path : "information" , title : "Information Page", component : InformationComponent},
    {path : "store" , title : "Store Page", component : StoreComponent},
    {path : "**" , title : "NotFound Page", component : NotfoundComponent},
];
