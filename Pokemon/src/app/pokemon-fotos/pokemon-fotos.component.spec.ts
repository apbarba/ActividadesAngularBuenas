import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFotosComponent } from './pokemon-fotos.component';

describe('PokemonFotosComponent', () => {
  let component: PokemonFotosComponent;
  let fixture: ComponentFixture<PokemonFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonFotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
