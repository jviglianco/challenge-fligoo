import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionDetailComponent } from './competitions/competition-detail/competition-detail.component';
import { CompetitionResolver } from './competitions/competition.resolver';
import { CompetitionsComponent } from './competitions/competitions.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

const routes: Routes = [{
  path: '',
  component: AppLayoutComponent,
  children: [
    {
      path: 'competition-list',
      component: CompetitionsComponent
    },
    {
      path: 'competition-detail/:code', 
      component: CompetitionDetailComponent,
      resolve: {
        competition: CompetitionResolver
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
