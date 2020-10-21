import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteesComponent } from './visitees.component';

describe('VisiteesComponent', () => {
  let component: VisiteesComponent;
  let fixture: ComponentFixture<VisiteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
