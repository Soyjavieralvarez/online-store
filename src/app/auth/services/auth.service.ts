import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/environment/enviroment';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs/operators';

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

  login() {
    return this.hhttp.get<Auth>(`${ this.baseURL}/users/1`)
    .pipe(
      tap( auth => this._auth = auth)
    );
  }
}
