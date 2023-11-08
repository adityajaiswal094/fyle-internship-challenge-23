import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GetUserReposFormComponent } from './MyComponents/get-user-repos-form/get-user-repos-form.component';
import { ShowUserReposComponent } from './MyComponents/show-user-repos/show-user-repos.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './MyComponents/home/home.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    GetUserReposFormComponent,
    ShowUserReposComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule, NgxPaginationModule, HttpClientModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
