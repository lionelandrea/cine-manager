import { Film } from '../../models/film.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FilmService {
  private apiUrl = 'http://localhost:8080/api/films';

  
  public filmsParDefaut: Film[] = [
    {
      id: 1,
      titre: 'Inception',
      editeur: 'Warner Bros',
      description: 'Un film de science-fiction basé sur les rêves.',
      realisateur: 'Christopher Nolan',
      imageUrl: 'https://m.media-amazon.com/images/I/51s+Q9f2YCL._AC_.jpg',
    },
    {
      id: 2,
      titre: 'Interstellar',
      editeur: 'Paramount',
      description: 'Voyage spatial pour sauver l’humanité.',
      realisateur: 'Christopher Nolan',
      imageUrl: 'https://m.media-amazon.com/images/I/71n58VJ9GEL._AC_SL1200_.jpg',
    },
    {
      id: 3,
      titre: 'Avatar',
      editeur: '20th Century Fox',
      description: 'Une aventure spectaculaire sur Pandora.',
      realisateur: 'James Cameron',
      imageUrl: 'https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg',
    },
  ];

  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl).pipe(
      catchError(() => of(this.filmsParDefaut))
    );
  }

  getFilmById(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.apiUrl}/${id}`);
  }

  ajouterFilm(film: Film): Observable<Film> {
    return this.http.post<Film>(this.apiUrl, film);
  }

  modifierFilm(id: number, film: Film): Observable<Film> {
    return this.http.put<Film>(`${this.apiUrl}/${id}`, film);
  }

  supprimerFilm(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}