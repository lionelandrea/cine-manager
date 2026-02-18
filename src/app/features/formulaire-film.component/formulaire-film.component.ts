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
  styleUrls: ['./formulaire-film.component.css'],
})
export class FormulaireFilmComponent implements OnInit {
  isEdit = false;
  id: number | null = null;
  error = '';

  
  nouveauFilm: Film = {
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

      if (Number.isNaN(this.id)) {
        this.error = "ID invalide.";
        return;
      }

      this.filmService.getFilmById(this.id).subscribe({
        next: (film: Film) => {
          
          this.nouveauFilm = film;
        },
        error: (err: unknown) => {
          console.error(err);
          this.error = "Impossible de charger le film à modifier.";
        },
      });
    }
  }

  
  enregistrer(): void {
    this.error = '';

    if (!this.nouveauFilm.titre.trim()) {
      this.error = 'Le titre est obligatoire.';
      return;
    }

    
    if (this.nouveauFilm.imageUrl && !this.nouveauFilm.imageUrl.trim()) {
      this.nouveauFilm.imageUrl = '';
    }

    if (this.isEdit && this.id !== null) {
      this.filmService.modifierFilm(this.id, this.nouveauFilm).subscribe({
        next: () => this.router.navigateByUrl('/'),
        error: (err: unknown) => {
          console.error(err);
          this.error = 'Échec de la modification.';
        },
      });
    } else {
      
      const { id, ...payload } = this.nouveauFilm;

      this.filmService.ajouterFilm(payload as Film).subscribe({
        next: () => this.router.navigateByUrl('/'),
        error: (err: unknown) => {
          console.error(err);
          this.error = "Échec de l'enregistrement.";
        },
      });
    }
  }

  annuler(): void {
    this.router.navigateByUrl('/');
  }
}

