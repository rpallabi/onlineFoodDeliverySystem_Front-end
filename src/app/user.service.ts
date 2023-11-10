import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import { User } from './user';
import { Observable, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  

private createUserURL = "http://localhost:8080/createUser";

private baseURL = "http://localhost:8080/getAllUser";


  constructor(private httpClient: HttpClient) { }
  
  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.createUserURL}`,user);
  }
  getUserList(){
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }
  

  private loggedIn: boolean = false;


  login(email: string, password: string): Observable<boolean> {
    return this.getUserList().pipe(
      map((users: any[]) => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          this.loggedIn = true;
          return true;
        } else {
          this.loggedIn = false;
          return false;
        }
      })
    );
  }


  logout(): void {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  private adminloggedIn: boolean = false;
  
adminlogin(email: string, password: string): Observable<{ adminId: string | null, adminLoggedIn: boolean }> {
  return this.getUserList().pipe(
    map((users: any[]) => {
      const user = users.find(u => u.email === email && u.password === password && u.userType === 'Admin');
      if (user) {
        this.adminloggedIn = true;
        return { adminId: user.id, adminLoggedIn: true };
      } else {
        this.adminloggedIn = false;
        return { adminId: null, adminLoggedIn: false };
      }
    })
  );
}


  adminlogout(): void {
    this.adminloggedIn = false;
  }

  isAdminLoggedIn(): boolean {
    return this.adminloggedIn;
  }
 }
