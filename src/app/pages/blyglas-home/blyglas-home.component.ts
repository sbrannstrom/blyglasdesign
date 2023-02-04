import { Platform } from '@angular/cdk/platform';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DiplomaComponent } from 'src/app/components/diploma/diploma.component';

@Component({
  selector: 'app-blyglas-home',
  templateUrl: './blyglas-home.component.html',
  styleUrls: ['./blyglas-home.component.scss'],
})
export class BlyglasHomeComponent implements OnInit {
  constructor(
    private viewportScroller: ViewportScroller,
    private dialog: MatDialog,
    private platform: Platform
  ) {}

  ngOnInit(): void {}

  onClick(element: string) {
    this.viewportScroller.scrollToAnchor(element);
  }

  openExternal() {
    return window.open('https://fönsterhantverkare.org/', '_blank');
  }

  openByggnadsvard() {
    return window.open(
      'https://byggnadsvardnorr.se/medlemslista/BVN-medlemmar#Glasm%C3%A4steriet-Blyglasdesign-i-Lule%C3%A5-AB-Medlem-38',
      '_blank'
    );
  }

  openPdf() {
    return window.open('./assets/forstudie.pdf', '_blank');
  }

  showDiploma() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.open('./assets/diplom.jpg', '_blank');
    } else {
      this.dialog.open(DiplomaComponent);
    }
  }
}
