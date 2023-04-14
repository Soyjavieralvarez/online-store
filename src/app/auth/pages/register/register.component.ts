import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';




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
    email:['', [ Validators.required, Validators.pattern( this.emailPattern )]],
    password:['', [ Validators.required, Validators.minLength(6)]],
    confirmPassword:['', [ Validators.required]]
  },
  //  {
  //   validators: [this.ValidatorService.equalFields('password', 'confirmPassword')]
  // }
  )

constructor ( private fb: FormBuilder ) {}

ngOnInit(): void{
  this.myForm.reset({
    name:'Javier Alvarez',
    email:'javier@javier.com'
  })
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
