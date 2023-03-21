import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonResponse } from './pokemon-interface';
import { catchError, Subject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  private url: string = "https://pokeapi.co/api/v2/pokemon/";
  private pokemonCList : string[] = ["bulbasaur", "squirtle", "charmander"];
  private data: PokemonResponse[] = [];

  constructor(private http: HttpClient) { };

  public pokemonList$ = new Subject<PokemonResponse[]>();

  getPokemon(): void{
    this.pokemonCList.map((eachPokemon) => {
      this.http.get<PokemonResponse>(this.url + eachPokemon).pipe(
        tap((data) =>{
          this.data.push(data);
        }),
        catchError((err : any) =>{
          console.log(err);
          return err
        })
      ).subscribe();
    // return this.pokemonCList.map((eachPokemon) => {
    //   this.http.get<PokemonResponse>(this.url + eachPokemon).pipe(
    //     tap((data) =>{
    //       this.data.push(data);
    //     }),
    //     catchError((err : any) =>{
    //       console.log(err);
    //       return err
    //     })
    //   ).subscribe();
      // this.pokemonList$.next(this.data);
    })
    // console.log('1', this.data)
    this.pokemonList$.next(this.data);
  }

}
