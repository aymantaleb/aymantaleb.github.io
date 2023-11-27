import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';



const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'resume', component: ResumePageComponent },
  { path: 'project', component: ProjectsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
