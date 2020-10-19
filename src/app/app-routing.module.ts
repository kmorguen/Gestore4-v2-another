import { AcceuilComponent } from './content/acceuil/acceuil.component';
import { LoginComponent } from './content/auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from './content/produit/produit.component';
import { StockComponent } from './content/stock/stock.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'login' , pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'acceuil',
    component : AcceuilComponent
  },
  {
    path : 'stock',
    component : StockComponent
  },
  {
    path : 'produit',
    component : ProduitComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
