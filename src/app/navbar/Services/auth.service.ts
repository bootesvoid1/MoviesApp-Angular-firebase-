import { Injectable } from "@angular/core";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { environment } from "../../../environment/environment";
import { initializeApp } from "firebase/app";
const firebaseConfig = environment.firebase;
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

@Injectable({
 providedIn: 'root'
})
export class AuthService {
 isAuth: boolean = false;

 constructor() { }

 createNewUser(email: string, password: string) {
   return new Promise<void>(
     (resolve, reject) => {
       createUserWithEmailAndPassword(auth, email, password)
         .then(() => {
           resolve();
         })
         .catch((error) => {
           console.log('Pb de création de nouveau compte', error.code, error.message);
           reject(error);
         });
     }
   );
 }

 signInUser(email: string, password: string) {
   return new Promise<void>(
     (resolve, reject) => {
       signInWithEmailAndPassword(auth, email, password)
         .then(() => {
           this.isAuth = true;
           resolve();
         })
         .catch((error) => {
           this.isAuth = false;
           reject(error);
         });
     }
   );
 }

 signOutUser() {
   this.isAuth = false;
   signOut(auth);
 }
}

