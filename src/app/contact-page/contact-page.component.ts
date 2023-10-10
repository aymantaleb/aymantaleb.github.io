import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('');
  message = new FormControl('');
  nameField:string = '';
  emailField:string = '';
  msgField:string = '';

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  formSubmit(){
    console.log(this.name.value)
    console.log(this.email.value)
    console.log(this.message.value)
    this.nameField = '';
    this.emailField = '';
    this.msgField = '';
  }
}
