import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerlistComponent } from './playerlist/playerlist.component';
import { PlayercreateComponent } from './playercreate/playercreate.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'playerslist',
    pathMatch: 'full'
  },{
    path: 'players/list',
    pathMatch: 'full',
    component: PlayerlistComponent
  },{
    path: 'player/status',
    component: PlayercreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
