import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowListComponent } from './cashflow-list.component';

describe('CashflowListComponent', () => {
  let component: CashflowListComponent;
  let fixture: ComponentFixture<CashflowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashflowListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashflowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
