import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireFilmComponent } from './formulaire-film.component';

describe('FormulaireFilmComponent', () => {
  let component: FormulaireFilmComponent;
  let fixture: ComponentFixture<FormulaireFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireFilmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireFilmComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
