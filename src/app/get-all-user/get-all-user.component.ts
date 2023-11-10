import { Component,OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-get-all-user',
  templateUrl: './get-all-user.component.html',
  styleUrls: ['./get-all-user.component.css']
})
export class GetAllUserComponent implements OnInit{
  users: User[] = [];
  
constructor(private userService : UserService){}


ngOnInit(): void {
  this.getUsers(); 
}


private getUsers(){
this.userService.getUserList().subscribe(data =>{
  this.users=data;
  
});
  }
}



