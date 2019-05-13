import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from './serie.component';
import { SerieRoutingModule } from './serie-routing.module';
import { SerieService } from './serie.service';
import { SerieAtualizarComponent } from './serie-atualizar/serie-atualizar.component';
import { SerieDetalhesComponent } from './serie-detalhes/serie-detalhes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SerieComponent,
    SerieAtualizarComponent,
    SerieDetalhesComponent
  ],
  imports: [
    CommonModule,
    SerieRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers:[
    SerieService
  ]
})
export class SerieModule { }
