import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, declarations } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMapComponent } from './home/home-map/home-map.component';
import { HomePackagesComponent } from './home/home-packages/home-packages.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { BannerComponent } from './banner/banner.component';
import { HttpClientModule , HttpClient} from '@angular/common/http';
@NgModule({
   declarations: [
      AppComponent,
      ...declarations,
      HomeMapComponent,
      HomePackagesComponent,
      FooterComponent,
      AboutUsComponent,
      OurServicesComponent,
      BannerComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [HttpClient],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
