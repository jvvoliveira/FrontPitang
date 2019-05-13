import { AutorService } from './autor.service';
import { AutorRoutingModule } from './autor-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorDetalhesComponent } from './autor-detalhes/autor-detalhes.component';
import { AutorAtualizarComponent } from './autor-atualizar/autor-atualizar.component';
import { AutorComponent } from './autor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AutorComponent,
    AutorDetalhesComponent, 
    AutorAtualizarComponent
  ],
  imports: [
    CommonModule,
    AutorRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    AutorService
  ]
})
export class AutorModule { }
