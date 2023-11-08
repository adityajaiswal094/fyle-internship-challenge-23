import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  constructor(private httpClient: HttpClient) {}

  getUser(githubUsername: string) {
    return this.httpClient.get(
      `https://api.github.com/users/${githubUsername}`
    );
  }

  getRepos(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos`);
  }

  // getLanguages(githubUsername: string, githubRepoName: string) {
  //   return this.httpClient.get(`https://api.github.com/repos/${githubUsername}/${githubRepoName}/languages`);
  // }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params
}
