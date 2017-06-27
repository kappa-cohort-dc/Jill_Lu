import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingsComponent } from './rankings/rankings.component';
import { BattleComponent } from './battle/battle.component';
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
  {path: '', pathMatch: 'full', component: ProfileComponent },
  {path: 'battle', component: BattleComponent},
  {path: 'ranking', component: RankingsComponent},

  //   children: []
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
