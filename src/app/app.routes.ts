import { Routes } from '@angular/router';
import { ListeFilmsComponent } from 'C:/Users/Leonking200/cine-manager/src/app/features/liste-films.component/liste-films.component';
import { FormulaireFilmComponent } from 'C:/Users/Leonking200/cine-manager/src/app/features/formulaire-film.component/formulaire-film.component';

export const routes: Routes = [
  { 
    path: '', 
    component: ListeFilmsComponent, 
    title: 'Accueil - Liste des films' 
  },
  { 
    path: 'ajouter', 
    component: FormulaireFilmComponent, 
    title: 'Ajouter un nouveau film' 
  } 
];