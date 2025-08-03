import {Component, inject} from '@angular/core';
import {AuthService} from '../../core/auth/auth-service';

@Component({
  selector: 'app-administrateur',
  imports: [],
  templateUrl: './administrateur.html',
  styleUrl: './administrateur.css'
})
export class Administrateur {
  authservice=inject(AuthService);

  logout(){
    this.authservice.logout();
  }

}
