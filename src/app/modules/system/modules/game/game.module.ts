import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { GamePageComponent } from './pages/game-page/game-page.component';

@NgModule({
  declarations: [GameComponent, GamePageComponent],
  imports: [CommonModule, GameRoutingModule],
})
export class GameModule {}
