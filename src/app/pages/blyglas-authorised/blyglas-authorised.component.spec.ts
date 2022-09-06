import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlyglasAuthorisedComponent } from './blyglas-authorised.component';

describe('BlyglasAuthorisedComponent', () => {
  let component: BlyglasAuthorisedComponent;
  let fixture: ComponentFixture<BlyglasAuthorisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlyglasAuthorisedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlyglasAuthorisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
