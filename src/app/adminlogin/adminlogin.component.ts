import { Component,OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit{
  

  user : User = new User();
  email: string = '';
  password: string = '';
  AdminloginError: string = '';
  adminId!: string | null;
  
constructor(private userService : UserService, private router:Router,private route: ActivatedRoute){

}
ngOnInit(): void {
  
    }

adminlogin(): void {
  this.userService.adminlogin(this.email, this.password)
    .subscribe((result: { adminId: string | null, adminLoggedIn: boolean }) => {
      if (result.adminLoggedIn) {

        this.adminId = result.adminId; 
        console.log('AdminID:', this.adminId);
        this.router.navigate(['/uploadfoods',this.adminId]);

      } else {
        this.AdminloginError = 'Invalid username or password';
        console.log('Invalid credentials. Please try again.');
        
      }
    });
}

adminlogout(): void {
}
}
