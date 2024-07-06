import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemon(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${name}`).pipe(
      map((response: any) => response)
    );
  }

  getAllPokemon(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon?limit=1025`).pipe(
      map((response: any) => response)
    );
  }

  getPokemonById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${id}`).pipe(
      map((response: any) => response)
    );
  }

  getMoveByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/move/${name}`).pipe(
      map((response: any) => response)
    );
  }
}
