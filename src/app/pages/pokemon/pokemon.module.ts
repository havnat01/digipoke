import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { PokemonRoutes } from './pokemon.routing';

@NgModule({
  imports: [CommonModule, PokemonRoutes],
  declarations: [PokemonComponent],
})
export class PokemonModule {}
