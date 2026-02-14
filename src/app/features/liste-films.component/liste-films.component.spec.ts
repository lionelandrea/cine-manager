import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFilmsComponent } from './liste-films.component';

describe('ListeFilmsComponent', () => {
  let component: ListeFilmsComponent;
  let fixture: ComponentFixture<ListeFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeFilmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFilmsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
