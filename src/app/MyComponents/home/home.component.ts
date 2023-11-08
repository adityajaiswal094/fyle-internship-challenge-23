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
  // per_page: number;
  // page: number;
  userName: string;
  profile: Profile;

  constructor(private apiService: ApiService) {
    // this.per_page = 10;
    // this.page = 1;

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

  // gotoNextPage(page: number) {
  //   page += 1;
  //   this.page = page;
  // }

  // gotoPreviousPage(page: number) {
  //   page -= 1;
  //   this.page = page;
  // }

  showProfile(userName: string) {
    this.userName = userName;
    this.apiService
      .getUser(userName)
      .pipe(
        mergeMap((data: any, index: number) => {
          // console.log(data);
          this.profile.avatar_url = data.avatar_url;
          this.profile.login = data.login;
          this.profile.name = data.name;
          this.profile.bio = data.bio;
          this.profile.html_url = data.html_url;
          this.profile.public_repos = data.public_repos;
          this.profile.twitter_username = data.twitter_username;
          this.profile.repos_url = data.repos_url;

          // if (
          //   this.profile.public_repos !== undefined &&
          //   this.per_page >= this.profile.public_repos
          // ) {
          //   this.per_page = this.profile.public_repos;
          // }

          return this.apiService.getRepos(userName).pipe(
            map((data: any, index: number) => {
              // console.log("repos: ", data);
              this.profile.repos = data;
              console.log(this.profile.repos);
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
