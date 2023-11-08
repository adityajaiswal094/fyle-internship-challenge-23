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
}
