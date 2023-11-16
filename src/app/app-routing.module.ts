import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SplashPageComponent } from './splash-page/splash-page.component';

const routes: Routes = [
  // { path: 'home', component: HomePageComponent },
  // { path: 'resume', component: ResumePageComponent },
  // { path: 'project', component: ProjectsPageComponent },
  // { path: 'contact', component: ContactPageComponent },
  { path: 'splash', component: SplashPageComponent },
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
