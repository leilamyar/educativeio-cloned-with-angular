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
import { BrowseAllComponent } from './views/browse-all/browse-all.component';
import { CardComponent } from './shared/card/card.component';
import { PathOverviewComponent } from './views/path-overview/path-overview.component';
import { CourseOverviewComponent } from './views/course-overview/course-overview.component';
import { CoursePanelComponent } from './views/course-panel/course-panel.component';

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
    BrowseAllComponent,
    CardComponent,
    PathOverviewComponent,
    CourseOverviewComponent,
    CoursePanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
