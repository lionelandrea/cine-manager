import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Film } from '../../models/film.model';
import { FilmService } from '../../core/services/film-service';

type SortMode = 'az' | 'za';

@Component({
  selector: 'app-liste-films',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './liste-films.component.html',
  styleUrl: './liste-films.component.css',
})
export class ListeFilmsComponent implements OnInit {
  films: Film[] = [];
  filteredFilms: Film[] = [];

  query = '';
  sort: SortMode = 'az';
  filteredCount = 0;

  defaultImg =
    'https://via.placeholder.com/600x900?text=No+Image';

  private expanded = new Set<number>();

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms() {
    this.filmService.getFilms().subscribe({
      next: (data) => {
        this.films = data || [];
        this.applyFilters();
      },
      error: () => {
        this.films = [];
        this.applyFilters();
      },
    });
  }

  onSearch() {
    this.applyFilters();
  }

  applyFilters() {
    const q = this.query.trim().toLowerCase();

    let list = this.films.filter((f) => {
      const titre = (f.titre || '').toLowerCase();
      const editeur = (f.editeur || '').toLowerCase();
      const real = (f.realisateur || '').toLowerCase();
      return titre.includes(q) || editeur.includes(q) || real.includes(q);
    });

    list = list.sort((a, b) => {
      const A = (a.titre || '').toLowerCase();
      const B = (b.titre || '').toLowerCase();
      return this.sort === 'az' ? A.localeCompare(B) : B.localeCompare(A);
    });

    this.filteredFilms = list;
    this.filteredCount = list.length;
  }

  confirmDelete(id: number) {
    const ok = confirm('Supprimer ce film ?');
    if (!ok) return;

    this.filmService.supprimerFilm(id).subscribe({
      next: () => this.loadFilms(),
      error: () => alert("Échec de suppression (API)."),
    });
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = this.defaultImg;
  }

  shortText(text: string | undefined, max = 160) {
    const t = (text || '').trim();
    if (t.length <= max) return t;
    return t.slice(0, max).trim() + '…';
  }

  toggleExpand(id: number) {
    if (this.expanded.has(id)) this.expanded.delete(id);
    else this.expanded.add(id);
  }

  isExpanded(id: number) {
    return this.expanded.has(id);
  }
}
