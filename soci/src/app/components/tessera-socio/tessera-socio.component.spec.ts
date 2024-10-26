import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesseraSocioComponent } from './tessera-socio.component';

describe('TesseraSocioComponent', () => {
  let component: TesseraSocioComponent;
  let fixture: ComponentFixture<TesseraSocioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesseraSocioComponent]
    });
    fixture = TestBed.createComponent(TesseraSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
