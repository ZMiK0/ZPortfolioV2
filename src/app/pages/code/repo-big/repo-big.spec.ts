import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoBig } from './repo-big';

describe('RepoBig', () => {
  let component: RepoBig;
  let fixture: ComponentFixture<RepoBig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoBig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoBig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
