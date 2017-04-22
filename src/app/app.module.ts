import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { GistService } from './gist.service';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { VlContentComponent, VlContentResolverService } from './vl-content';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    VisualizationComponent,
    VlContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    GistService,
    VlContentResolverService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
