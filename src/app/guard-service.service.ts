import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GuardServiceService implements CanActivate{

  constructor(private userService: UserService, private router: Router) { }

  canActivate(): boolean {
    if (this.userService.isAdminLoggedIn()) {
      return true; 
    } else{
      this.router.navigate(['/adminlogin']); 
      return false; 
    }
    

    }
}
