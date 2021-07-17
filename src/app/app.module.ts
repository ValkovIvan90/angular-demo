import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ThemeComponent } from './theme/theme.component';
import { ContentService } from './content.service';


@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RoutingModule
  ],
  providers: [
    ContentService
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
