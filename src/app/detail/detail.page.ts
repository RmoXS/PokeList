import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  pokemon: any;

  constructor(private router: Router ,private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    const pokemonId = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.getPokemonById(pokemonId).subscribe(data => {
        this.pokemon = data;
    });
    } else {
      console.error('Pokemon ID not found');
    }
  }

  moveDetail(moveName: string) {
    this.router.navigate(['/move', moveName])
  }
}
