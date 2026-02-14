import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'; 
import { Film } from 'C:/Users/Leonking200/cine-manager/src/app/models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  
  private apiUrl = 'http://localhost:8080/api/films';

  
  private filmsFictifs: Film[] = [
    {
      id: 1,
      titre: 'tensei shitara slime datta ken',
      editeur: 'Taiki Kawakami ',
      description: 'Satoru, employé de bureau lambda, se fait assassiner par un criminel en pleine rue. Son histoire aurait dû s\'arrêter là, mais il se retrouve soudain réincarné dans un autre monde sous la forme d\'un Slime, le monstre le plus faible du bestiaire fantastique.',
      imageUrl: 'https://adala-news.fr/wp-content/uploads/2025/11/Moi-quand-je-me-reincarne-en-Slime-Film-2.webp',
      realisateur:'',
    },
    {
      id: 2,
      titre: 'one piece red',
      editeur: 'Eiichirō Oda',
      description: 'Luffy et son équipage s’apprêtent à assister à un festival de musique attendu avec impatience. La chanteuse la plus populaire du monde, Uta, va monter sur scène pour la première fois. Celle qui n’est autre que la fille du légendaire pirate Shanks Le Roux va révéler la puissance exceptionnelle de sa voix qui pourrait bien changer le monde…',
      imageUrl: 'https://wafuu.com/cdn/shop/products/one-piece-film-red-special-movie-linked-edition-978102_1080x.jpg?v=1695256138',
      realisateur:'',
    },
    {
      id: 3,
      titre: 'Dragon ball super',
      editeur: ' Akira Toriyama',
      description: 'Une fois passée la menace de Majin Boo, Son Goku et ses amis vivent enfin en paix. Les années se sont écoulées et tandis que tout le monde se retrouve pour fêter l’anniversaire de Bulma, apparaît alors Beerus, le Dieu de la destruction. Après avoir dormi pendant des décennies, il cherche à contrer une prophétie autour des Super Saïyen…',
      imageUrl: 'https://manganim.fr/cdn/shop/files/dragon-ball-integrale-tome-01-a-21-glenat_1024x1024@2x.webp?v=1715094955',
      realisateur:'',
    }
  ];

  constructor(private http: HttpClient) {}

 
  getFilms(): Observable<Film[]> {
    
    return this.filmsFictifs ? of(this.filmsFictifs) : this.http.get<Film[]>(this.apiUrl);
  }

  
  ajouterFilm(film: Film): Observable<Film> {
    return this.http.post<Film>(this.apiUrl, film);
  }

  
  supprimerFilm(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}