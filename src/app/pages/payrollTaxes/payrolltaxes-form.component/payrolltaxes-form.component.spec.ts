import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrolltaxesFormComponent } from './payrolltaxes-form.component';

describe('PayrolltaxesFormComponent', () => {
  let component: PayrolltaxesFormComponent;
  let fixture: ComponentFixture<PayrolltaxesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrolltaxesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrolltaxesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
