import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllUserComponent } from './get-all-user/get-all-user.component';
import { AppComponent } from './app.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { combineLatest } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { GuardServiceService } from './guard-service.service';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  {path:'users', component:GetAllUserComponent,canActivate:[GuardServiceService]},
  {path:'create-users', component:CreateUsersComponent},
  {path:'login',component:LoginComponent},
  {path:'orders',component:OrdersComponent,canActivate: [AuthGuardService] },
  {path:'adminlogin',component:AdminloginComponent},
  {path:'uploadfoods/:adminId',component:FoodComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
