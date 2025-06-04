import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarRecetaPage } from './registrar-receta.page';

describe('RegistrarRecetaPage', () => {
  let component: RegistrarRecetaPage;
  let fixture: ComponentFixture<RegistrarRecetaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
