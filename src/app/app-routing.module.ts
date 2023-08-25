import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'digimon',
    loadChildren: () =>
      import('./pages/digimon/digimon.module').then((m) => m.DigimonModule),
  },
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./pages/pokemon/pokemon.module').then((m) => m.PokemonModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
