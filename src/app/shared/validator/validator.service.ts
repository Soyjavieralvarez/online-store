import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  equalFields( field1: string, field2: string){

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const pass1= formGroup.get(field1)?.value;
      const pass2= formGroup.get(field2)?.value;

      

      if (pass1 !== pass2 ) {
        formGroup.get(field2)?.setErrors({ notEquals: true});
        return { notEqual: true}
      }

      formGroup.get(field2)?.setErrors(null);

      return null

    }

  }
}
