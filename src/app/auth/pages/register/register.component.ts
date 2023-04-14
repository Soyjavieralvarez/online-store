import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fullNamePattern: string = "([a-zA-Z]+) ([a-zA-Z]+)";
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  cantBeStrider(control: FormControl ) {
    console.log(control.value)
  }

  myForm: FormGroup = this.fb.group({
    name:['', [ Validators.required, Validators.pattern(this.fullNamePattern) ]],
    email:['', [ Validators.required, Validators.pattern( this.emailPattern )], [this.emailValidator]],
    password:['', [ Validators.required, Validators.minLength(6)]],
    confirmPassword:['', [ Validators.required]]
  },
  //  {
  //   validators: [this.ValidatorService.equalFields('password', 'confirmPassword')]
  // }
  );

 

  get emailErrorMsg(){
    const caso = Object.keys(this.myForm.get("email")?.errors ?? {})[0];
    switch(caso){
    case "":
      return "";
    case "required":
      return "El email es obligatorio";
    case "pattern":
      return "El email no es válido";
    case "unique":
      return "El email ya está registrado";
    default:
      return "Error desconocido con este email";
    }
  }

constructor ( private fb: FormBuilder,
              private validatorService: ValidatorService,
              private emailValidator: EmailValidatorService ) {}

ngOnInit(): void{
  // this.myForm.reset({
  //   name:'Javier Alvarez',
  //   email:'javier@javier.com',
  //   password:'123456',
  //   confirmPassword:'123456'
  // })
}

invalidField( field:string ) {
  return this.myForm.get(field)?.invalid
  && this.myForm.get(field)?.touched
}



submitForm() {
  console.log(this.myForm.value);
  this.myForm.markAllAsTouched();
}



}
