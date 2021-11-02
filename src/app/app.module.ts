import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/button/button.component';
import { HomeComponent } from './views/home/home.component';
import { PricingComponent } from './views/pricing/pricing.component';
import { LoginComponent } from './views/login/login.component';
import { JoinComponent } from './views/join/join.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ExploreComponent } from './views/explore/explore.component';
import { CardsListGalleryComponent } from './shared/cards-list-gallery/cards-list-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HomeComponent,
    PricingComponent,
    LoginComponent,
    JoinComponent,
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    ExploreComponent,
    CardsListGalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
