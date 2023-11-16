import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './splash-page/splash-page.component.html',
  styleUrls: ['./splash-page/splash-page.component.scss']
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private http: HttpClient){
    this.matIconRegistry.addSvgIcon(
      `pageDL`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/pageDL.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `github`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/github.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `linkedin`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/linkedin.svg")
    );
  }
  
  title = 'Ayman Taleb';

 
}
