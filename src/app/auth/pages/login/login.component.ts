import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
 constructor( private router: Router,
               private authService: AuthService ) {}

 login () {
  //Go to backend
  //A users
  this.authService.login()
  .subscribe( resp => {
    console.log(resp);
    if ( resp.id ) {
      this.router.navigate(['./products'])
    }
  })

// this.router.navigate(['./products'])

 }

}
