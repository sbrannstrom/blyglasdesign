import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlyinfattningarComponent } from './blyinfattningar.component';

describe('BlyinfattningarComponent', () => {
  let component: BlyinfattningarComponent;
  let fixture: ComponentFixture<BlyinfattningarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlyinfattningarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlyinfattningarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
