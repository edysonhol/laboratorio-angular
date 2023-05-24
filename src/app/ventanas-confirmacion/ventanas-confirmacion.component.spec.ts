import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanasConfirmacionComponent } from './ventanas-confirmacion.component';

describe('VentanasConfirmacionComponent', () => {
  let component: VentanasConfirmacionComponent;
  let fixture: ComponentFixture<VentanasConfirmacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentanasConfirmacionComponent]
    });
    fixture = TestBed.createComponent(VentanasConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
