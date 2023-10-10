import { Component } from '@angular/core';
import { ProjectPageService } from './project-page.service';
import { Clipboard } from '@angular/cdk/clipboard';



@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css'],
})
export class ProjectsPageComponent {
  repos: any[] = [];

  constructor(
    private Service: ProjectPageService,
    private clipboard: Clipboard,
    
  ) {}

  ngOnInit(): void {
    this.loadGithubRepos('aymantaleb');
  }
  loadGithubRepos(username: string): void {
    this.Service.getGithubRepos(username).subscribe(
      (data: any[]) => {
        // Sort the repositories by creation date in descending order (newest first)
        this.repos = data.sort((a, b) => {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          return dateB.getTime() - dateA.getTime();
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }
  copyRepoCloneUrl(cloneUrl: string): void {
    // Copy the clone URL to the clipboard
    this.clipboard.copy(cloneUrl);
    
    
  }
}
