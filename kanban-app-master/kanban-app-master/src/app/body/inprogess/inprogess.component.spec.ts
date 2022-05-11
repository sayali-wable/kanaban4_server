import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogessComponent } from './inprogess.component';

describe('InprogessComponent', () => {
  let component: InprogessComponent;
  let fixture: ComponentFixture<InprogessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InprogessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InprogessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
