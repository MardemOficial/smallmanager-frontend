import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBalanceComponent } from './inventory-balance.component';

describe('InventoryBalanceComponent', () => {
  let component: InventoryBalanceComponent;
  let fixture: ComponentFixture<InventoryBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryBalanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
