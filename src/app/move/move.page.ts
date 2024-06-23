import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-move',
  templateUrl: './move.page.html',
  styleUrls: ['./move.page.scss'],
})
export class MovePage implements OnInit {
  move: any;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    const moveName = this.route.snapshot.paramMap.get('moveName');
    if (moveName) {
      this.pokemonService.getMoveByName(moveName).subscribe((data: any) =>{
        this.move = data;
      });
    } else {
      console.error('Move name not found');
    }
  }

}
