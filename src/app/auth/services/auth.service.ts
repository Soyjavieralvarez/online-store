import { HttpClient } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { enviroment } from 'src/environment/enviroment';
import { Auth } from '../interfaces/auth.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = enviroment.baseURL;
  private _auth: Auth | undefined;

  get auth() {
    return {...this._auth!}
  }

  constructor( private hhttp: HttpClient) { }

 verifyAuthentication(): Observable<boolean> {
  if (!localStorage.getItem('token')) {
    return of (false) ;
  }

  return this.hhttp.get<Auth>(`${ this.baseURL}/users/1`)
  .pipe(
    map( auth => {
      this._auth = auth;
      return true;
    })
  )
 }

  login() {
    return this.hhttp.get<Auth>(`${ this.baseURL}/users/1`)
    .pipe(
      tap( auth => this._auth = auth),
      tap( auth => localStorage.setItem('token', auth.id)),
    );
  }

  logOut() {
    this._auth = undefined;
  }

}
