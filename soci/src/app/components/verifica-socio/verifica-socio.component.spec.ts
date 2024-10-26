import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificaSocioComponent } from './verifica-socio.component';

describe('VerificaSocioComponent', () => {
  let component: VerificaSocioComponent;
  let fixture: ComponentFixture<VerificaSocioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificaSocioComponent]
    });
    fixture = TestBed.createComponent(VerificaSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
