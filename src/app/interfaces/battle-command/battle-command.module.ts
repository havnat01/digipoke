import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleCommandComponent } from './battle-command.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BattleCommandComponent],
  exports: [BattleCommandComponent],
})
export class BattleCommandModule {}
