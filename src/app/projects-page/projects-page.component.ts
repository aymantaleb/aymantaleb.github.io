import { Component, OnInit, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ProjectPageService } from './project-page.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css'],
})
export class ProjectsPageComponent {
  repos: any[] = [];
  repoNames: string[] = [];
  imageUrls: string[] = [];
  isExpanded: boolean[] = [];
  isMobileView: boolean = false;
  constructor(
    private Service: ProjectPageService,
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {
    this.loadGithubRepos('aymantaleb');
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

  toggleImage(index: number): void {
    this.isExpanded[index] = !this.isExpanded[index];
  }

  loadGithubRepos(username: string): void {
    this.Service.getGithubRepos(username).subscribe(
      (data: any[]) => {

        const excludeRepo = 'aymantaleb.github.io';

        this.repos = data.filter(repo => repo.name !== excludeRepo)
        .sort((a, b) => {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          return dateB.getTime() - dateA.getTime();
        });

        for (let i = 0; i < this.repos.length; i++) {
          this.repoNames.push(this.repos[i].name);
        }
        
        this.loadRepoThumbnail('aymantaleb');
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadRepoThumbnail(username: string): void {
    const observables = this.repoNames.map(repoName =>
      this.Service.getRepoThumbnail(username, repoName)
    );
  
    forkJoin(observables).subscribe(
      (data: any[]) => {
        this.imageUrls = data.map(item => item.download_url);
        
        
      },
      (error) => {
        console.error(error);
      }
    );
  }

 
}
