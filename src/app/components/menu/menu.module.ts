import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { BattleCommandModule } from 'src/app/interfaces/battle-command/battle-command.module';

@NgModule({
  imports: [CommonModule, RouterModule, BattleCommandModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule {}
