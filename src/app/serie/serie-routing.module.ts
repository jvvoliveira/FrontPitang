
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerieComponent } from './serie.component';
import { SerieDetalhesComponent } from './serie-detalhes/serie-detalhes.component';
import { SerieAtualizarComponent } from './serie-atualizar/serie-atualizar.component';


const routes: Routes = [
    {  path: '', component: SerieComponent },
    {  path: 'detalhes/:id', component: SerieDetalhesComponent },
    {  path: 'edicao/:id', component: SerieAtualizarComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SerieRoutingModule {}