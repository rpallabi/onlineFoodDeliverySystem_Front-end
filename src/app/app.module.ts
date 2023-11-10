import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllUserComponent } from './get-all-user/get-all-user.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FoodComponent } from './food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    GetAllUserComponent,
    CreateUsersComponent,
    LoginComponent,
    OrdersComponent,
    AdminloginComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
