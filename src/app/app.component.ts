import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blyglasdesign';
  constructor(private meta: Meta) {
    this.meta.addTags([
      {
        name: 'description',
        content: 'Ett traditionellt glasmästeri med antikvarisk inriktning',
      },
      {
        name: 'keywords',
        content: 'glasmästare, glasmästeri, blyglasdesign, blyglas',
      },
    ]);
  }
}
