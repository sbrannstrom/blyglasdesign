import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlyglasContactComponent } from './blyglas-contact.component';

describe('BlyglasContactComponent', () => {
  let component: BlyglasContactComponent;
  let fixture: ComponentFixture<BlyglasContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlyglasContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlyglasContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
