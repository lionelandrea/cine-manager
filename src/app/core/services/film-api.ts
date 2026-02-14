import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../../models/film.model';

@Injectable({ providedIn: 'root' })
export class FilmApiService {
  private apiUrl = 'http://localhost:8080/films';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl);
  }

  add(film: Film): Observable<Film> {
    return this.http.post<Film>(this.apiUrl, film);
  }

  update(id: number, film: Film): Observable<Film> {
    return this.http.put<Film>(`${this.apiUrl}/${id}`, film);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getById(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.apiUrl}/${id}`);
  }
}
