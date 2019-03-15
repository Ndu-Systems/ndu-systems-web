import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, declarations } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMapComponent } from './home/home-map/home-map.component';
import { HomePackagesComponent } from './home/home-packages/home-packages.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
   declarations: [
      AppComponent,
      ...declarations,
      HomeMapComponent,
      HomePackagesComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
