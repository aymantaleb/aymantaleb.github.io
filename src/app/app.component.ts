import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private http: HttpClient){
    this.matIconRegistry.addSvgIcon(
      `pageDL`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/pageDL.svg")
    );
  }
  
  title = 'Ayman Taleb';

 
}
