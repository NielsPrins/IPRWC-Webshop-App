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
    CartItemComponent
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
