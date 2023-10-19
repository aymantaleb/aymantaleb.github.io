import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjectPageService {

  

  constructor(private http: HttpClient) { }

  getGithubRepos(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }

  getRepoThumbnail(username: string, repo: string): Observable<any> {
    return this.http.get(`https://api.github.com/repos/${username}/${repo}/contents/screenshot.png`);
  }
}
