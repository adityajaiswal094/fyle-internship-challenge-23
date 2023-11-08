import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { map, mergeMap } from 'rxjs';
import { Profile } from 'src/app/Models/Profile';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userName: string;
  profile: Profile;

  constructor(private apiService: ApiService) {
    this.userName = '';

    this.profile = {
      avatar_url: '',
      name: '',
      login: '',
      bio: '',
      html_url: '',
      public_repos: 0,
      twitter_username: '',
      repos_url: '',
      repos: [],
    };
  }

  ngOnInit(): void {}

  showProfile(userName: string) {
    this.userName = userName;
    this.apiService
      .getUser(userName)
      .pipe(
        mergeMap((data: any, index: number) => {
          this.profile.avatar_url = data.avatar_url;
          this.profile.login = data.login;
          this.profile.name = data.name;
          this.profile.bio = data.bio;
          this.profile.html_url = data.html_url;
          this.profile.public_repos = data.public_repos;
          this.profile.twitter_username = data.twitter_username;
          this.profile.repos_url = data.repos_url;

          return this.apiService.getRepos(userName).pipe(
            map((data: any, index: number) => {
              this.profile.repos = data;
              return data;
            })
          );
        })
      )
      .subscribe({
        error: (error) => {
          console.log(error);
          alert(`Error: ${error.status} ${error.error.message}`);
        },
      });
  }
}
