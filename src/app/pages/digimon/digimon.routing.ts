import { Routes, RouterModule } from '@angular/router';
import { DigimonComponent } from './digimon.component';

const routes: Routes = [{ path: '', component: DigimonComponent }];

export const DigimonRoutes = RouterModule.forChild(routes);
