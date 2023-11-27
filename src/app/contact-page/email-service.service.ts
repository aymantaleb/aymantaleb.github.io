import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  private emailUrl: string = '/sendMail';
  constructor(private http: HttpClient) { 
   
  }

  sendEmail(email: string, msg:string, subject:string): Observable<any>{
    return this.http.post(this.emailUrl,{
      recipient: email,
      msgBody: msg,
      subject: subject
    })
  }

 
}
