import { NgModule } from '@angular/core';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [GameComponent, GamePageComponent],
  imports: [GameRoutingModule, SharedModule],
})
export class GameModule {}
