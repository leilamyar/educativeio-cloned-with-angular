import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { JoinComponent } from './views/join/join.component';
import { LoginComponent } from './views/login/login.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { PricingComponent } from './views/pricing/pricing.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  // { path: "business", component: HomeComponent },
  { path: "pricing", component: PricingComponent },
  { path: "login", component: LoginComponent },
  { path: "join", component: JoinComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
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
