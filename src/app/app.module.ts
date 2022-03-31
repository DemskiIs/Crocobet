import { ApiService } from './api.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './header/registration/registration.component';
import { UserStylesDirective } from './directives/user-styles.directive';
import { PostsComponent } from './users/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { RouteService } from './route/route.service';
import { ComentsComponent } from './users/posts/coments/coments.component';



const appRoutes: Routes = [
  {path: '', component: UsersComponent },
  {path: 'users/:id', component: UserComponent },
  {path: 'users/:id/posts', component: PostsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HeaderComponent,
    RegistrationComponent,
    UserStylesDirective,
    PostsComponent,
    ComentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ApiService, RouteService, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
