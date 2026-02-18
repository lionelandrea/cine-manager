import { Film } from '../../models/film.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class FilmService {
  private apiUrl = 'http://localhost:8080/api/films';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl);
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
