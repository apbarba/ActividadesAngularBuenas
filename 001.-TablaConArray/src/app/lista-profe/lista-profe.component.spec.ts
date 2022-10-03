import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProfeComponent } from './lista-profe.component';

describe('ListaProfeComponent', () => {
  let component: ListaProfeComponent;
  let fixture: ComponentFixture<ListaProfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProfeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
