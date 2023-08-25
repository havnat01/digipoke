import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon.component';

const routes: Routes = [{ path: '', component: PokemonComponent }];

export const PokemonRoutes = RouterModule.forChild(routes);
