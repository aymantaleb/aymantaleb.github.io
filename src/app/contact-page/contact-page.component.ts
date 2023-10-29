import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EmailServiceService } from './email-service.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent {
  constructor(private emailService: EmailServiceService) {}

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('');
  message = new FormControl('');
  nameField: string = '';
  emailField: string = '';
  msgField: string = '';

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  formSubmit() {
    console.log(this.name.value);
    console.log(this.email.value);
    console.log(this.message.value);
    const emailValue = this.email.value;
    const messageValue = this.message.value;
    const nameValue = this.name.value;

    if (emailValue && messageValue && nameValue) {
      this.emailService
        .sendEmail(
          'ayman1779@gmail.com',
          messageValue,
          nameValue + ' ' + emailValue
        )
        .subscribe(
          (response) => {
            if (response.status === 'success') {
              console.log('Email sent successfully:', response.message);
            } else {
              console.error('Error sending email:', response.message);
            }
          },
          (error) => {
            console.error('Error sending email:', error);
          }
        );

      this.name.reset();
      this.email.reset();
      this.message.reset();
    } else {
      console.error('Invalid form data. Please fill out all fields.');
    }
  }
}
