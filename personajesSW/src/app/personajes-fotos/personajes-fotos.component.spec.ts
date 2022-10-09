import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesFotosComponent } from './personajes-fotos.component';

describe('PersonajesFotosComponent', () => {
  let component: PersonajesFotosComponent;
  let fixture: ComponentFixture<PersonajesFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajesFotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajesFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
