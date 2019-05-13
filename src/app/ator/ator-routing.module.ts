import { AtorAtualizarComponent } from './ator-atualizar/ator-atualizar.component';
import { AtorDetalhesComponent } from './ator-detalhes/ator-detalhes.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtorComponent } from './ator.component';

const routes: Routes = [
    {  path: '', component: AtorComponent },
    {  path: 'detalhes/:id', component: AtorDetalhesComponent },
    {  path: 'edicao/:id', component: AtorAtualizarComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AtorRoutingModule {}