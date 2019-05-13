import { DiretorAtualizarComponent } from './diretor-atualizar/diretor-atualizar.component';
import { DiretorDetalhesComponent } from './diretor-detalhes/diretor-detalhes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiretorComponent } from './diretor.component';

const routes: Routes = [
    {  path: '', component: DiretorComponent },
    {  path: 'detalhes/:id', component: DiretorDetalhesComponent },
    {  path: 'edicao/:id', component: DiretorAtualizarComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DiretorRoutingModule {}