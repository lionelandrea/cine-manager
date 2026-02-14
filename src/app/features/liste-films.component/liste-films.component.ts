import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from 'C:/Users/Leonking200/cine-manager/src/app/models/film.model';
import { FilmService } from 'C:/Users/Leonking200/cine-manager/src/app/core/services/film-service';

@Component({
  selector: 'app-liste-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-films.component.html',
  styleUrl: './liste-films.component.css'
})
export class ListeFilmsComponent implements OnInit {
  films: Film[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(data => {
      this.films = data;
    });
    
  }

  
  supprimer(id: number): void {
    if(confirm('Voulez-vous vraiment supprimer ce film ?')) {
      this.filmService.supprimerFilm(id).subscribe(() => {
        
        this.films = this.films.filter(f => f.id !== id);
      });
    }
  }
}