import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { TeamListItemComponent } from './team-list-item/team-list-item.component';
import { UserService } from './user.service';
import { StorageServiceProvider } from './storage.service';
import { ThemeService } from './theme.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeListComponent,
    AsideComponent,
    FooterComponent,
    TeamListItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ThemeService,
    UserService,
    StorageServiceProvider
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
