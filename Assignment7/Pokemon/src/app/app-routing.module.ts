import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Pages/pokemon-list/pokemon-list.module').then((m) => m.PokemonListModule),
  },
  {
    path: 'select',
    loadChildren: () => import('./Pages/select-list/select-list.module').then((m) => m.SelectListModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
