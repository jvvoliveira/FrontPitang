import { AtorService } from './ator.service';
import { AtorRoutingModule } from './ator-routing.module';
import { AtorComponent } from './ator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtorDetalhesComponent } from './ator-detalhes/ator-detalhes.component';
import { AtorAtualizarComponent } from './ator-atualizar/ator-atualizar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AtorComponent,
    AtorDetalhesComponent,
    AtorAtualizarComponent
  ],
  imports: [
    CommonModule,
    AtorRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers:[
    AtorService
  ]
})
export class AtorModule { }
