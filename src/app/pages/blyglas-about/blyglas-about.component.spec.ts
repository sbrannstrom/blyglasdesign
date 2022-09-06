import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlyglasAboutComponent } from './blyglas-about.component';

describe('BlyglasAboutComponent', () => {
  let component: BlyglasAboutComponent;
  let fixture: ComponentFixture<BlyglasAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlyglasAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlyglasAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
