import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {HomepageComponent} from './homepage/homepage.component';
import {NavigationComponent} from './navigation/navigation.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AppService} from './app.service';
import {RecaptchaModule} from 'ng-recaptcha';
import {ProductComponent} from './homepage/product/product.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {AccountComponent} from './account/account.component';
import {CartItemComponent} from './shopping-cart/cart-item/cart-item.component';
import {AdminComponent} from './admin/admin.component';
import {ManageProductsComponent} from './admin/manage-products/manage-products.component';
import {OrderComponent} from './admin/order/order.component';
import {ProductRowComponent} from './admin/manage-products/product-row/product-row.component';
import {SmallImageWithZoomComponent} from './components/small-image-with-zoom/small-image-with-zoom.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ShoppingCartComponent,
    AccountComponent,
    CartItemComponent,
    AdminComponent,
    ManageProductsComponent,
    OrderComponent,
    ProductRowComponent,
    SmallImageWithZoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    RecaptchaModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
