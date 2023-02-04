import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlyglasComponent } from './pages/blyglas/blyglas.component';
import { BlyinfattningarComponent } from './pages/blyinfattningar/blyinfattningar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';


import { BlyglasHomeComponent } from './pages/blyglas-home/blyglas-home.component';
import { BlyglasAboutComponent } from './pages/blyglas-about/blyglas-about.component';
import { BlyglasContactComponent } from './pages/blyglas-contact/blyglas-contact.component';
import { BlyglasAuthorisedComponent } from './pages/blyglas-authorised/blyglas-authorised.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReasonsComponent } from './components/reasons/reasons.component';
import { ChatComponent } from './components/chat/chat.component';
import { CardsComponent } from './components/cards/cards.component';
import { DiplomaComponent } from './components/diploma/diploma.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlyglasComponent,
    BlyinfattningarComponent,
    BlyglasHomeComponent,
    BlyglasAboutComponent,
    BlyglasContactComponent,
    BlyglasAuthorisedComponent,
    ContactComponent,
    ReasonsComponent,
    ChatComponent,
    CardsComponent,
    DiplomaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
