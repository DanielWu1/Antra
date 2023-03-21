import { Component, OnInit } from '@angular/core';
import { PokemonResponse } from 'src/app/service/pokemon-interface';
import { PokemonServiceService } from 'src/app/service/pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  //.sprites.other.dream_world.front_default
  pokemonList !: PokemonResponse[];
  constructor(private PokemonService: PokemonServiceService) { }
  ngOnInit(): void {
    this.PokemonService.pokemonList$.subscribe((data) => {
      this.pokemonList = data;
    })
    this.PokemonService.getPokemon();
    console.log(this.pokemonList);
  }
  getPokemon(id:number, name:string){
    // console.log(name);
    if(confirm(`do you want to choice ${name}`)){
      this.pokemonList = this.pokemonList.filter((each)=>{
        return id === each.id;
      })
    }
  }
}
