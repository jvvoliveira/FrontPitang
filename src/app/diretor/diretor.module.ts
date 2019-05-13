import { DiretorDetalhesComponent } from './diretor-detalhes/diretor-detalhes.component';
import { DiretorAtualizarComponent } from './diretor-atualizar/diretor-atualizar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretorRoutingModule } from './diretor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DiretorComponent } from './diretor.component';
import { DiretorService } from './diretor.service';

@NgModule({
  declarations: [
    DiretorComponent,
    DiretorAtualizarComponent,
    DiretorDetalhesComponent
  ],
  imports: [
    CommonModule,
    DiretorRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    DiretorService
  ]
})
export class DiretorModule { }
