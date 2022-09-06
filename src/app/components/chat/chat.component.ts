import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription, throttleTime } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  refreshTimer$: Observable<number> = new Observable<0>;
  timerSub = new Subscription();
  visible: boolean = false;
  animate: boolean = false;
  firstRun: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.refreshTimer$ = interval(10 * 2 * 1000);
    this.timerSub = this.refreshTimer$.subscribe(async () => {
      this.animate = !this.animate;
      if (this.animate) {
        setTimeout(() => {
          this.animate = false;
        }, 5500);
      }
    });
  }

}
