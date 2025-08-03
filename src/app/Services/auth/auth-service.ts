import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


interface AuthResponse {
  token: string;
  role: string;
}


@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'token';
  private roleKey = 'role';
  private api:string="http://localhost:8080";


  //isLoggedIn = signal(!!localStorage.getItem(this.tokenKey));

  //isLoggedIn = signal(!!localStorage.getItem(this.tokenKey));
  role = signal(localStorage.getItem(this.roleKey) ?? '');
  isLoggedIn = signal(true);


  constructor(private http: HttpClient,
     private router: Router) {
     }

      login(email: string, password: string) {
        console.log(email,password);
        return this.http.post<AuthResponse>(this.api+'/api/auth/login', { email, motDePasse: password }).pipe(
          tap(res => {
            localStorage.setItem(this.tokenKey, res.token);
            localStorage.setItem(this.roleKey, res.role);


            console.log(res.token,res.role);
            console.log(this.getRolefromJwt());

            this.isLoggedIn.set(true);
            this.role.set(res.role);
          })
        );
      }


      register(nom: string, email: string, password: string, role: string) {
        return this.http.post<AuthResponse>(this.api+'/api/auth/register', { nom, email, motDePasse: password, role }).pipe(
          tap(res => {
            localStorage.setItem(this.tokenKey, res.token);
            localStorage.setItem(this.roleKey, res.role);
            this.isLoggedIn.set(true);
            this.role.set(res.role);
          })
        );
      }

      logout() {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.roleKey);
        this.isLoggedIn.set(false);
        this.role.set('');
        this.router.navigate(['/login']);
      }

      getToken() {
        return localStorage.getItem(this.tokenKey);
      }

      hasRole(role: string): boolean {
          return this.getRolefromJwt()=== role;


      }

      getRolefromJwt(){
          //const decoded: any = jwtDecode(<any>localStorage.getItem(this.tokenKey));
         // let role: string = decoded.role || '';
          return localStorage.getItem(this.roleKey);
      }



}

