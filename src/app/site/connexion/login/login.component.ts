import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../navbar/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private authService:AuthService,private router:Router ){}
  ngOnInit() {  }
signInUser(email: string,pass: string) {
this.authService.signInUser(email,pass).then(
  ()=>{
    alert('Bienvenue!'+email);
    this.router.navigate(['films']);
  },
  (error:any)=>{
    console.log('Pb de connextion'+error);
    alert('Votre compte est incorrect');
  })
}

}
