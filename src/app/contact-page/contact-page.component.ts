import { Component, OnInit, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent {
  constructor(private recaptchaV3Service: ReCaptchaV3Service) {}

  user_email = new FormControl('', [Validators.required, Validators.email]);
  user_name = new FormControl('');
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
    if (this.user_email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.user_email.hasError('user_email') ? 'Not a valid user_email' : '';
  }

  formSubmit(e: Event) {
   
    const emailValue = this.user_email.value;
    const messageValue = this.message.value;
    const nameValue = this.user_name.value;

    if (emailValue && messageValue && nameValue) {
      
      emailjs.sendForm('aySiteContactHandler', 'contact_form', e.target as HTMLFormElement, {
        publicKey: 'aaKkS6BIEHx5Ki-XH'
      } )
      .then(
        () => {console.log('email Sent');}
        , (error) => {console.log('FAILED...', (error as EmailJSResponseStatus).text);}
      )

      this.user_name.reset();
      this.user_email.reset();
      this.message.reset();
    } else {
      console.error('Invalid form data. Please fill out all fields.');
    }
  }

  public reCaptcha(): void {
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token: string) => console.debug(`Token [${token}] generated`))
  }
}
