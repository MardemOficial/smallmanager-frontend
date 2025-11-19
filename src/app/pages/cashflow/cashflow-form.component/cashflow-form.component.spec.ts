import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowFormComponent } from './cashflow-form.component';

describe('CashflowFormComponent', () => {
  let component: CashflowFormComponent;
  let fixture: ComponentFixture<CashflowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashflowFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashflowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
