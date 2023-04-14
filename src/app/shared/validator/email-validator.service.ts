import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor( private http: HttpClient) { }

  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null>{
    const email = control.value;
    if(!email){
      return of({emailRequired: true});
    }
    return this.http.get<any[]>(`http://localhost:3000/registeredUsers?=${ email }`).pipe(
      map((res) => res.length == 0? null : { unique: true })
    );
  }
}
