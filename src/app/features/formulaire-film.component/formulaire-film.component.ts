import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FilmService } from '../../core/services/film-service';
import { Film } from '../../models/film.model';

@Component({
  selector: 'app-formulaire-film',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulaire-film.component.html',
  styleUrl: './formulaire-film.component.css',
})
export class FormulaireFilmComponent implements OnInit {
  isEdit = false;
  id: number | null = null;
  error = '';

  
  nouveauFilm: Film = {
    id: undefined,
    titre: '',
    editeur: '',
    description: '',
    imageUrl: '',
    realisateur: '',
  };

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEdit = true;
      this.id = Number(idParam);

      this.filmService.getFilmById(this.id).subscribe({
        next: (film) => (this.nouveauFilm = film),
        error: () => (this.error = "Impossible de charger le film à modifier."),
      });
    }
  }

  
  ajouter() {
    this.error = '';

    if (!this.nouveauFilm.titre?.trim()) {
      this.error = 'Le titre est obligatoire.';
      return;
    }

    if (this.isEdit && this.id !== null) {
      this.filmService.modifierFilm(this.id, this.nouveauFilm).subscribe({
        next: () => this.router.navigateByUrl('/'),
        error: () => (this.error = 'Échec de la modification.'),
      });
    } else {
      this.filmService.ajouterFilm(this.nouveauFilm).subscribe({
        next: () => this.router.navigateByUrl('/'),
        error: () => (this.error = "Échec de l'enregistrement."),
      });
    }
  }
}


