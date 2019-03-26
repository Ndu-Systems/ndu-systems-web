
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, HomeHeaderComponent, HomeBannerComponent, HomeMapComponent, HomePackagesComponent } from './home';
import { NavigationComponent } from './navigation';
import { RequestQouteComponent } from './request-qoute';
import { FooterComponent } from './footer';
import { AboutUsComponent } from './about-us';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'request-quote', component: RequestQouteComponent },
  { path: 'about-us', component: AboutUsComponent }
];

export const declarations: Array<any> = [
  NavigationComponent,
  HomeComponent,
  HomeHeaderComponent,
  RequestQouteComponent,
  HomeBannerComponent,
  HomeMapComponent,
  HomePackagesComponent,
  FooterComponent,
  AboutUsComponent
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
