import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, Event, NavigationEnd } from '@angular/router';
import { ContactComponent } from 'src/app/components/contact/contact.component';

@Component({
  selector: 'app-blyglas',
  templateUrl: './blyglas.component.html',
  styleUrls: ['./blyglas.component.scss']
})
export class BlyglasComponent implements OnInit {

  mobileMenuOpen: boolean = false;
  currentRoute: string = 'Blyglasdesign AB';

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  openContact() {
    this.dialog.open(ContactComponent);
  }

}
