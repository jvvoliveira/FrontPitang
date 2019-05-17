import { AutorService } from './autor.service';
import { AutorRoutingModule } from './autor-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorDetalhesComponent } from './autor-detalhes/autor-detalhes.component';
import { AutorAtualizarComponent } from './autor-atualizar/autor-atualizar.component';
import { AutorComponent } from './autor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AutorComponent,
    AutorDetalhesComponent, 
    AutorAtualizarComponent
  ],
  imports: [
    CommonModule,
    AutorRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers:[
    AutorService
  ]
})
export class AutorModule { }
