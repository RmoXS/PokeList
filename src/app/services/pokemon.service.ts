import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  private moveUrl = 'https://pokeapi.co/api/v2/move'

  constructor(private http: HttpClient) {}

  getPokemonList(offset: number, limit: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?offset=${offset}&limit=${limit}`).pipe(
      map((response: any) => response)
    );
  }

  getPokemon(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${name}`).pipe(
      map((response: any) => response)
    );
  }

  getAllPokemon(): Observable<any> {
    return this.http.get(`${this.apiUrl}?limit=1025`).pipe(
      map((response: any) => response)
    );
  }

  getPokemonById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      map((response: any) => response)
    );
  }

  getMoveByName(name: string): Observable<any> {
    return this.http.get(`${this.moveUrl}/${name}`).pipe(
      map((response: any) => response)
    );
  }
}
