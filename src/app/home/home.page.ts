import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { debounceTime, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  paletteToggle = false;
  pokemons: any[] = [];
  findPokemon: string = '';
  searchSubject: Subject<string> = new Subject<string>();

  constructor(private pokemonService: PokemonService, private route: Router) {
    this.searchSubject.pipe(
      debounceTime(300)
    ).subscribe(searchTerm => {
      this.handleSearch(searchTerm);
    });
  }
  
  ngOnInit() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    this.initializeDarkPalette(prefersDark.matches);

    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkPalette(mediaQuery.matches));

    this.loadAllPokemon();
  }

  initializeDarkPalette(isDark: boolean) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  toggleChange(ev: any) {
    this.toggleDarkPalette(ev.detail.checked);
  }

  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

  loadAllPokemon() {
    this.pokemonService.getAllPokemon().subscribe(data => {
      this.pokemons = data.results.map((pokemon: any, index: number) => ({
        ...pokemon,
        id: index + 1
      }));
    });
  }

  handleInput(event: any) {
    const value = event.target.value.trim().toLowerCase();
    this.searchSubject.next(value);
  }

  handleSearch(searchTerm: string) {
    if (searchTerm) {
      this.pokemonService.getPokemon(searchTerm).subscribe(data => {
        this.pokemons = [{
          name: data.name,
          id: data.id,
          url: `https://pokeapi.co/api/v2/pokemon/${data.id}/`
        }];
      }, _error => {
        this.pokemons = [];
      });
    } else {
      this.loadAllPokemon();
    }
  }

  detailpage(pokemonId: number) {
    this.route.navigate(['/detail', pokemonId]);
  }
}
