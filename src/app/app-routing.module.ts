import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlyglasAboutComponent } from './pages/blyglas-about/blyglas-about.component';
import { BlyglasAuthorisedComponent } from './pages/blyglas-authorised/blyglas-authorised.component';
import { BlyglasContactComponent } from './pages/blyglas-contact/blyglas-contact.component';
import { BlyglasHomeComponent } from './pages/blyglas-home/blyglas-home.component';
import { BlyglasComponent } from './pages/blyglas/blyglas.component';
import { BlyinfattningarComponent } from './pages/blyinfattningar/blyinfattningar.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blyglas/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'blyglas',
    component: BlyglasComponent,
    children: [
      {
        path: 'home',
        component: BlyglasHomeComponent
      },
      {
        path: 'about',
        component: BlyglasAboutComponent
      },
      {
        path: 'contact',
        component: BlyglasContactComponent
      },
      {
        path: 'authorised',
        component: BlyglasAuthorisedComponent
      },
    ]
  },
  {
    path: 'blyinfattningar',
    component: BlyinfattningarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
