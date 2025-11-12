import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrolltaxesListComponent } from './payrolltaxes-list.component';

describe('PayrolltaxesListComponent', () => {
  let component: PayrolltaxesListComponent;
  let fixture: ComponentFixture<PayrolltaxesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrolltaxesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrolltaxesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
