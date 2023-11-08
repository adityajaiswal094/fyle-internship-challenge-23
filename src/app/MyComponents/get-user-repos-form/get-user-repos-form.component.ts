import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-get-user-repos-form',
  templateUrl: './get-user-repos-form.component.html',
  styleUrls: ['./get-user-repos-form.component.scss'],
})
export class GetUserReposFormComponent {
  userName: string;
  @Output() submitUser: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.userName = '';
  }

  onSubmitUserName() {
    const userName = this.userName;
    this.submitUser.emit(userName);
  }
}
