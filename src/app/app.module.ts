import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule, Validators, FormControl } from '@angular/forms'; 
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomePageComponent } from './home-page/home-page.component';
import {MatSelectModule} from '@angular/material/select';
import {NgIf} from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from "ng-recaptcha";


@NgModule({
  declarations: [
    AppComponent,
    ResumePageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    PdfViewerModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgIf,
    ClipboardModule,
    MatButtonModule, 
    MatMenuModule,
    MatToolbarModule,
    RecaptchaModule,
    RecaptchaV3Module,
    RecaptchaFormsModule 
      ],
  providers: [{ provide: RECAPTCHA_V3_SITE_KEY, useValue: "6Lfbh8kpAAAAAMj2cGYy0k3ZX7C6b0QtDcGt4JLS" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
