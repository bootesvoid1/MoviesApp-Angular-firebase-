import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';
import  firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
isAuth: boolean=false;
userEmail!:string;
constructor(private authService:AuthService){}
  ngOnInit(): void {
    getAuth().onAuthStateChanged((user: any) => {
      if (user) {
        this.userEmail = user.email;
        this.isAuth = true;
      } else {
        this.userEmail = "";
        this.isAuth = false;
      }
    });
  }
  onSignOut() {
this.authService.signOutUser();
}

}
