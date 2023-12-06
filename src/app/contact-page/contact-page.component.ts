import { Component, OnInit, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
  isMobileView: boolean = false;

  ngOnInit() {
    this.checkIfMobileView();
    fromEvent(window, 'resize')
    .pipe(debounceTime(200)) // Adjust the debounce time as needed
    .subscribe(() => this.checkIfMobileView());
  }

  @HostListener('window:resize')
  onResize() {
    this.checkIfMobileView();
  }

  private checkIfMobileView() {
    this.isMobileView = window.innerWidth <= 1000; // You can adjust this threshold as needed
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  formSubmit() {
   
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
