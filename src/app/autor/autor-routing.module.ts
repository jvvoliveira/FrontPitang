import { AutorAtualizarComponent } from './autor-atualizar/autor-atualizar.component';
import { AutorDetalhesComponent } from './autor-detalhes/autor-detalhes.component';
import { AutorComponent } from './autor.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {  path: '', component: AutorComponent },
    {  path: 'detalhes/:id', component: AutorDetalhesComponent },
    {  path: 'edicao/:id', component: AutorAtualizarComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AutorRoutingModule {}