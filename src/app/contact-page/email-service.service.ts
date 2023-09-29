import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactSubmit } from './contact-submit';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  private emailUrl: string = 'http://localhost:8080/submitContact';
  constructor(private http: HttpClient) { 
   
  }

  public contactInfo(info:ContactSubmit){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.emailUrl,info, { headers });
  }
}
