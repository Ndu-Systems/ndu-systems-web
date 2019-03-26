import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, declarations } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMapComponent } from './home/home-map/home-map.component';
import { HomePackagesComponent } from './home/home-packages/home-packages.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
   declarations: [
      AppComponent,
      ...declarations,
      HomeMapComponent,
      HomePackagesComponent,
      FooterComponent,
      AboutUsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
