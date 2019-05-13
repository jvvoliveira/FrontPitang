import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'filmes', loadChildren: './filme/filme.module#FilmeModule'},
  { path: 'series', loadChildren: './serie/serie.module#SerieModule'},
  { path: 'atores', loadChildren: './ator/ator.module#AtorModule'},
  { path: 'autores', loadChildren: './autor/autor.module#AutorModule'},
  { path: 'diretores', loadChildren: './diretor/diretor.module#DiretorModule'},
  { path: '', pathMatch: "full", redirectTo: "filmes"},
  { path: "**", redirectTo: "filmes"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
