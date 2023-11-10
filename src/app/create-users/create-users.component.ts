import { Component,OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
  
})
export class CreateUsersComponent implements OnInit{
user : User = new User();

constructor(private userService : UserService, private router:Router){

}
ngOnInit(): void {
    
}

saveUser(){
  this.userService.createUser(this.user).subscribe(data=>{
    console.log(data);
    this.gotoUserDetails();
  })
}

gotoUserDetails(){
this.router.navigate(['/users'])
}
ngSubmit(){
console.log(this.user);
this.saveUser();
}

}
