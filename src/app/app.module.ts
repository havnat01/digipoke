import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './components/menu/menu.module';
import { BattleCommandModule } from './interfaces/battle-command/battle-command.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MenuModule, BattleCommandModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
