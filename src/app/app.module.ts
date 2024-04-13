import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdElComponent } from './home/ad-el/ad-el.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Carlog1Component } from './home/carlog1/carlog1.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { FilterComponent } from './home/filter/filter.component';
import { Carlog2Component } from './home/carlog2/carlog2.component';
import { TutorCompComponent } from './home/tutor-comp/tutor-comp.component';
import { PopularsComponent } from './home/populars/populars.component';
import { provideHttpClient } from '@angular/common/http';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { LetsTalkComponent } from './home/lets-talk/lets-talk.component';
import { SubelComponent } from './home/subel/subel.component';
import { FooterComponent } from './footer/footer.component';
import { TextComponent } from './about-us/text/text.component';
import { ImageComponent } from './about-us/image/image.component';
import { PartnersComponent } from './about-us/partners/partners.component';
import { ContactComponent } from './contact/contact.component';
import { CarsComponent } from './cars/cars.component';
import { CarfilterComponent } from './cars/carfilter/carfilter.component';
import { CarcardsComponent } from './cars/carcards/carcards.component';
import { FilteredCarsComponent } from './filtered-cars/filtered-cars.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdElComponent,
    Carlog1Component,
    AboutUSComponent,
    FilterComponent,
    Carlog2Component,
    TutorCompComponent,
    PopularsComponent,
    FeedbackComponent,
    LetsTalkComponent,
    SubelComponent,
    FooterComponent,
    TextComponent,
    ImageComponent,
    PartnersComponent,
    ContactComponent,
    CarsComponent,
    CarfilterComponent,
    CarcardsComponent,
    FilteredCarsComponent,
    SignInComponent,
    SignUpComponent,
    WrongRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    ButtonModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
      provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
