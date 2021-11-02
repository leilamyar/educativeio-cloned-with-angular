import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsListGalleryComponent } from './shared/cards-list-gallery/cards-list-gallery.component';
import { BrowseAllComponent } from './views/browse-all/browse-all.component';
import { ExploreComponent } from './views/explore/explore.component';
import { HomeComponent } from './views/home/home.component';
import { JoinComponent } from './views/join/join.component';
import { LoginComponent } from './views/login/login.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { PricingComponent } from './views/pricing/pricing.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: 'explore', component: ExploreComponent, children: [
      { path: '', component: BrowseAllComponent },
      { path: 'new', component: CardsListGalleryComponent }
    ]},
  // { path: "explore", component: ExploreComponent },
  // { path: "business", component: HomeComponent },
  // { path: "new", component: CardsListGalleryComponent },
  { path: "pricing", component: PricingComponent },
  { path: "login", component: LoginComponent },
  { path: "join", component: JoinComponent },
  { path: "", redirectTo: "", pathMatch: "full", component: HomeComponent },
  { path: "**", component: PageNotFoundComponent },
];

// const routes: Routes = [
//   { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
//   { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
