import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlyglasComponent } from './blyglas.component';

describe('BlyglasComponent', () => {
  let component: BlyglasComponent;
  let fixture: ComponentFixture<BlyglasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlyglasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlyglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
