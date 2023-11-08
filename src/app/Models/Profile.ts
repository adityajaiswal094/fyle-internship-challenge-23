import { Repo } from "./Repo";

export interface Profile {
  avatar_url: string | undefined;
  name: string | undefined;
  login: string | undefined;
  bio: string | undefined;
  html_url: string | undefined;
  public_repos: number | undefined;
  twitter_username: string | undefined;
  repos_url: string | undefined;
  repos: Repo[] | undefined;

  // constructor() {
  //   this.avatar_url = '';
  //   this.name = '';
  //   this.login = '';
  //   this.bio = '';
  //   this.repos = {
  //     repoName: '',
  //     repoBio: '',
  //     languageUsed: '',
  //   };
  // }
}
