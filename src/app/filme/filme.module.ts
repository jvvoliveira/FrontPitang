import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeRoutingModule } from './filme-routing.module';
import { FilmeComponent } from './filme.component';
import { FilmeService } from './filme.service';
import { FilmeDetalhesComponent } from './filme-detalhes/filme-detalhes.component';
import { FilmeAtualizarComponent } from './filme-atualizar/filme-atualizar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    FilmeComponent,
    FilmeDetalhesComponent,
    FilmeAtualizarComponent
  ],
  imports: [
    CommonModule,
    FilmeRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    FilmeService
  ],
  exports: []

})
export class FilmeModule { }
