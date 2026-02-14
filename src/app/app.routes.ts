import { Routes } from '@angular/router';
import { ListeFilmsComponent } from './features/liste-films.component/liste-films.component';
import { FormulaireFilmComponent } from './features/formulaire-film.component/formulaire-film.component';

export const routes: Routes = [
  { path: '', component: ListeFilmsComponent, title: 'Accueil' },
  { path: 'ajouter', component: FormulaireFilmComponent, title: 'Ajouter un film' },
  { path: 'modifier/:id', component: FormulaireFilmComponent, title: 'Modifier un film' },
  { path: '**', redirectTo: '' }
];
