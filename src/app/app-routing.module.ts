import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {AccountComponent} from './account/account.component';
import {AdminComponent} from './admin/admin.component';
import {ManageProductsComponent} from './admin/manage-products/manage-products.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'account', component: AccountComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/manage-products', component: ManageProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
