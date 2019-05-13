import { FilmeDetalhesComponent } from './filme-detalhes/filme-detalhes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmeComponent } from './filme.component';
import { FilmeAtualizarComponent } from './filme-atualizar/filme-atualizar.component';

const routes: Routes = [
    {  path: '', component: FilmeComponent },
    {  path: 'detalhes/:id', component: FilmeDetalhesComponent },
    {  path: 'edicao/:id', component: FilmeAtualizarComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FilmeRoutingModule {}