import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Colaborado } from './colaborado';

describe('Colaborado', () => {
  let component: Colaborado;
  let fixture: ComponentFixture<Colaborado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Colaborado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Colaborado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
