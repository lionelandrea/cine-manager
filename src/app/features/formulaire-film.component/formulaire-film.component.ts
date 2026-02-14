import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { FilmService } from 'C:/Users/Leonking200/cine-manager/src/app/core/services/film-service';
import { Film } from '../../models/film.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-film',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './formulaire-film.component.html',
  styleUrl: './formulaire-film.component.css'
})
export class FormulaireFilmComponent {
  
  nouveauFilm: Film = {
    titre: '',
    editeur: '',
    description: '',
    imageUrl: '',
    realisateur:'',
  };

  constructor(private filmService: FilmService, private router: Router) {}

  ajouter() {
    this.filmService.ajouterFilm(this.nouveauFilm).subscribe(() => {
      
      this.router.navigate(['/']);
    });
  }
}