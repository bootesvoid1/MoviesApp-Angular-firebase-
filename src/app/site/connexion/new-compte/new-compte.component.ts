import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../navbar/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-compte',
  templateUrl: './new-compte.component.html',
  styleUrl: './new-compte.component.css'
})
export class NewCompteComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService:AuthService,private router:Router ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  createUser(email:string,pass:string) {
    console.log(email,pass);
    this.authService.createNewUser(email,pass).then(
      ()=>{
        console.log('compte créer avec succés');
        alert('compte créer avec succés');
        this.authService.isAuth=true;
        this.router.navigate(['home']);

      }
    )
  }
 }
