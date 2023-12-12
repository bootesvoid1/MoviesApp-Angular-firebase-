import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NewCompteComponent } from './new-compte/new-compte.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import {AngularFireStorageModule} from '@angular/fire/compat/storage'
import { environment } from '../../../environment/environment';
import { AuthGuard } from './auth-guard';
import { FilmsComponent } from '../../films/films.component';

@NgModule({
  declarations: [
    LoginComponent,
    NewCompteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'films',canActivate:[AuthGuard], component:FilmsComponent},
      {path:'login',component:LoginComponent},
      {path:'newcompte',component:NewCompteComponent}
  ]),  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireAuthModule,
  AngularFireStorageModule,
  ]
})
export class ConnexionModule { }
