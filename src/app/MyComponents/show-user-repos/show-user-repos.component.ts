import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Profile } from 'src/app/Models/Profile';
import { ApiService } from 'src/app/services/api.service';
import { mergeMap, map } from 'rxjs';

@Component({
  selector: 'app-show-user-repos',
  templateUrl: './show-user-repos.component.html',
  styleUrls: ['./show-user-repos.component.scss'],
})
export class ShowUserReposComponent implements OnInit {
  @Input() profile: Profile;
  @Output() per_page: number;
  @Output() page: number;
  @Output() gotoPreviousPage: EventEmitter<number> = new EventEmitter();
  @Output() gotoNextPage: EventEmitter<number> = new EventEmitter();

  constructor(private apiService: ApiService) {
    this.per_page = 10;
    this.page = 1;

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

  // = {
  //   avatar_url: 'https://avatars.githubusercontent.com/u/85288377?v=4',
  //   name: 'Aditya Jaiswal',
  //   userName: 'adityajaiswal094',
  //   bio: 'Fuck the bio',
  //   html_url: 'https://github.com/adityajaiswal094/',
  // twitter_username: '',
  //   repos: [
  //     {
  //       repoName: 'fyle-challenge-23',
  //       repoBio: 'Internship Challenge',
  //       repoUrl:
  //         'https://github.com/adityajaiswal094/fyle-internship-challenge-23',
  //       languages: ['TypeScript', 'JavaScript'],
  //     },
  //     {
  //       repoName: 'fyle-challenge-23',
  //       repoBio: 'Internship Challenge',
  //       repoUrl:
  //         'https://github.com/adityajaiswal094/fyle-internship-challenge-23',
  //       languageUsed: 'TypeScript',
  //     },
  //     {
  //       repoName: 'fyle-challenge-23',
  //       repoBio: 'Internship Challenge',
  //       repoUrl:
  //         'https://github.com/adityajaiswal094/fyle-internship-challenge-23',
  //       languageUsed: 'TypeScript',
  //     },
  //     {
  //       repoName: 'fyle-challenge-23',
  //       repoBio: 'Internship Challenge',
  //       repoUrl:
  //         'https://github.com/adityajaiswal094/fyle-internship-challenge-23',
  //       languageUsed: 'TypeScript',
  //     },
  //     {
  //       repoName: 'fyle-challenge-23',
  //       repoBio: 'Internship Challenge',
  //       repoUrl:
  //         'https://github.com/adityajaiswal094/fyle-internship-challenge-23',
  //       languageUsed: 'TypeScript',
  //     },
  //   ],
  // };

  // onClickPrevious() {
  //   if (
  //     this.profile.public_repos !== undefined &&
  //     this.per_page * (this.page - 1) >= 1
  //   )
  //     this.page -= 1;
  //   if (this.profile.login !== undefined) {
  //     console.log(
  //       'this.page, this.per_page, this.profile.login: ',
  //       this.page,
  //       this.per_page,
  //       this.profile.login
  //     );
  //     this.apiService
  //       .getRepos(this.profile.login, this.per_page, this.page)
  //       .subscribe();
  //   }
  // }

  // onClickNext() {
  //   if (
  //     this.profile.public_repos !== undefined &&
  //     this.page * this.per_page <= this.profile.public_repos
  //   ) {
  //     this.page += 1;
  //     if (this.profile.login !== undefined) {
  //       console.log(
  //         'this.page, this.per_page, this.profile.login: ',
  //         this.page,
  //         this.per_page,
  //         this.profile.login
  //       );
  //       this.apiService
  //         .getRepos(this.profile.login, this.per_page, this.page)
  //         .subscribe();
  //     }
  //   }
  // }
}
