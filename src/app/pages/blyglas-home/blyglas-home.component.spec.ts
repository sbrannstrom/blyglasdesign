import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlyglasHomeComponent } from './blyglas-home.component';

describe('BlyglasHomeComponent', () => {
  let component: BlyglasHomeComponent;
  let fixture: ComponentFixture<BlyglasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlyglasHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlyglasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
