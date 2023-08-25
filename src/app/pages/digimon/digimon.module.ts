import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigimonComponent } from './digimon.component';
import { DigimonRoutes } from './digimon.routing';

@NgModule({
  imports: [CommonModule, DigimonRoutes],
  declarations: [DigimonComponent],
})
export class DigimonModule {}
